import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

// Custom Toasts
import { CustomErrorToast } from "../../components/CustomToasts/CustomErrorToast";
import { CustomSuccessToast } from "../../components/CustomToasts/CustomSuccessToast";

// Components
import UserInfo from "./components/UserInfo";
import PaymentMethod from "./components/PaymentMethod";

// Context
import { mainStore } from "../../context/MainContext";
import { useNavigate } from "react-router";

const checkoutValidationSchema = Yup.object({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  companyName: Yup.string().nullable(),
  streetAddress: Yup.string().trim().required("Street address is required"),
  country: Yup.string().required("Please select a country"),
  state: Yup.string().required("Please select a state"),
  zipCode: Yup.string().trim().required("Zip code is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\s()-]+$/, "Invalid phone number format")
    .required("Phone number is required"),
  paymentMethod: Yup.string().required("Select a payment method"),
});

const Checkout = () => {
  const {
    BASE_URL,
    cartEndPoint,
    orderEndPoint,
    token,
    cart,
    saveCartItems,
    userData,
  } = useContext(mainStore);

  const navigateTo = useNavigate();

  const shippingPrice = 0;
  const subTotal = (cart || []).reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const finalTotal = subTotal + shippingPrice;

  const initialValues = {
    firstName: userData?.username || "",
    lastName: userData?.lastname || "",
    companyName: "",
    streetAddress: "",
    country: "",
    state: "",
    zipCode: "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    paymentMethod: "cash",
  };

  const handleOrderSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!cart || cart.length === 0) {
      CustomErrorToast("Your cart is empty");
      setSubmitting(false);
      return;
    }

    try {
      const orderPayload = {
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          companyName: values.companyName || null,
          streetAddress: values.streetAddress,
          country: values.country,
          state: values.state,
          zipCode: values.zipCode,
          email: values.email,
          phone: values.phone,
          paymentMethod: values.paymentMethod,
          totalAmount: finalTotal,
          items: cart,
          orderStatus: "pending",
          user: userData?.id,
        },
      };

      await axios.post(`${BASE_URL}${orderEndPoint}`, orderPayload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const cartId = JSON.parse(localStorage.getItem("cartId"));

      if (cartId) {
        await axios.put(
          `${BASE_URL}${cartEndPoint}/${cartId}`,
          { data: { items: [] } },
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }

      if (saveCartItems) {
        saveCartItems([]);
      }

      CustomSuccessToast("Order placed successfully!");
      resetForm();
      navigateTo("/");
    } catch (error) {
      const message =
        error.response?.data?.error?.message || "Failed to place order";
      CustomErrorToast(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="grow min-h-[56dvh] px-4 lg:px-0 py-4">
      <div className="container mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutValidationSchema}
          enableReinitialize
          onSubmit={handleOrderSubmit}
        >
          <Form className="flex flex-col md:flex-row gap-4 items-start">
            <UserInfo />
            <PaymentMethod />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Checkout;
