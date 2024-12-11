import React from "react";

const CheckoutForm = ({ price, handleChange, formValues, checkout }) => {
  return (
    <section className="lg:w-[412px]   bg-[rgba(255,255,255,1)] shadow-lg rounded-md ">
      <div className="w-full p-5">
        <div className="py-5">
          <h1 className=" font-medium text-lg ">Checkout Form</h1>
          <form className="w-full my-4">
            <div className="w-full flex flex-col ">
              <label
                htmlFor="fullname"
                className="text-base font-medium capitalize"
              >
                full name
              </label>

              <input
                type="text"
                className="my-2 rounded-md text-base p-3 border-gray-300 w-full"
                placeholder="Enter your full name"
                name="name"
                onChange={handleChange}
                value={formValues.name}
              />
            </div>

            <div className="w-full flex flex-col ">
              <label
                htmlFor="fullname"
                className="text-base font-medium capitalize"
              >
                Email address
              </label>

              <input
                type="email"
                className="my-2 rounded-md text-base p-3 border-gray-300"
                placeholder="Enter your email address"
                name="email"
                onChange={handleChange}
                value={formValues.email}
              />
            </div>
            <div className="w-full flex flex-col ">
              <label
                htmlFor="fullname"
                className="text-base font-medium capitalize"
              >
                Amount
              </label>

              <input
                type="text"
                className="my-2 rounded-md border-gray-300"
                disabled
                name="price"
                value={`$${price}`}
              />
            </div>

            <button
              className="bg-gray-300 py-2 px-4 rounded-md text-gray-900 font-semibold text-sm transition-colors duration-300 hover:text-cyan-500 cursor-pointer mt-4"
              onClick={checkout}
            >
              Proceed to checkout
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
