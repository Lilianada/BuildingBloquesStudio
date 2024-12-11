import React from "react";

const CheckoutModal = ({
  handleChange,
  formValues,
  price,
  initializePayment,
  onSuccess,
  onClose,
  setOpenModal,
}) => {
  const handleCloseModal = () => {
    setOpenModal(false);
    initializePayment(onSuccess, onClose);
  };
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.7)]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white max-w-[500px] w-full p-6">
          <div className="w-full my-2 flex justify-end">
            <button className="" onClick={() => setOpenModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <h3 className="text-lg font-semibold capitalize">checkout form</h3>

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
                className="my-2 rounded-md text-base p-3"
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
                className="my-2 rounded-md text-base p-3"
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
                className="my-2 rounded-md"
                disabled
                name="price"
                value={`$${price}`}
              />
            </div>

            <button
              className="bg-gray-300 py-2 px-4 rounded-md text-gray-900 font-semibold text-sm transition-colors duration-300 hover:text-cyan-500 cursor-pointer mt-4"
              onClick={handleCloseModal}
            >
              Proceed to checkout
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutModal;
