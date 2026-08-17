const UserInfo = () => {
  return (
    <div className="w-full md:w-8/12 py-4 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">
        Billing Information
      </h2>

      <form className="flex flex-col gap-5">
        {/* Row 1: First Name, Last Name, Company Name */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className="text-sm text-gray-700">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Your first name"
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastName" className="text-sm text-gray-700">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your last name"
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName" className="text-sm text-gray-700">
              Company Name <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company name"
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Row 2: Street Address */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="streetAddress" className="text-sm text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            placeholder="Street Address"
            className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Row 3: Country / Region, States, Zip Code */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="country" className="text-sm text-gray-700">
              Country / Region
            </label>
            <select
              id="country"
              name="country"
              defaultValue=""
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all bg-white text-gray-500"
            >
              <option value="" disabled>Select</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="state" className="text-sm text-gray-700">
              States
            </label>
            <select
              id="state"
              name="state"
              defaultValue=""
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all bg-white text-gray-500"
            >
              <option value="" disabled>Selects</option>
              <option value="ny">New York</option>
              <option value="ca">California</option>
              <option value="tx">Texas</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="zipCode" className="text-sm text-gray-700">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Zip Code"
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Row 4: Email, Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              className="px-3 py-2.5 rounded-md border border-gray-200 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;