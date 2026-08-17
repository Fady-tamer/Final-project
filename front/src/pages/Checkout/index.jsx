// components
import PaymentMethod from "../../components/CeckoutComponents/PaymentMethod";
import UserInfo from "../../components/CeckoutComponents/UserInfo";

const Checkout = () => {
  return (
    <div className="grow px-4 lg:px-0 py-4">
      <div className="container flex flex-col md:flex-row gap-4">
        <UserInfo />
        <PaymentMethod />
      </div>
    </div>
  );
};

export default Checkout;
