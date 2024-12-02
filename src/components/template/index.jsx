import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../utils/template";
import Header from "../Header";
import TemplateDescription from "./TemplateDescription";
import { usePaystackPayment } from "react-paystack";
import TemplateCarousel from "./TemplateCarousel";
import CheckoutModal from "./CheckoutModal";

const Template = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    price: product?.price,
    email: "",
  });

  const config = {
    email: formValues.email,
    amount: product?.price * 100,
    publicKey: process.env.REACT_APP_publicKey,
  };

  const onSuccess = (reference) => {
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    console.log("closed");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setFormValues((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };

  const initializePayment = usePaystackPayment(config);

  useEffect(() => {
    if (products && products.length > 0) {
      const getProduct = products[id - 1];

      setProduct(getProduct);
    }
  }, [id]);

  return (
    <>
      <Header />
      <main className="relative isolate bg-gray-900 min-h-screen ">
        <div className="mx-auto  max-w-7xl w-full pt-24">
          {product && (
            <section className="grid-cols-1 lg:grid-cols-2 w-full max-w-[900px] mx-auto mt-5 grid">
              <div className="max-w-[400px] w-[90%] mx-auto lg:w-full ">
                <TemplateCarousel productImages={product?.img} />
                <Link
                  to={product?.link}
                  target="_blank"
                  className="flex gap-2 text-sm font-semibold leading-6 text-cyan-400 transition-colors duration-300 hover:text-cyan-200 cursor-pointer my-3"
                >
                  Preview Project<span aria-hidden="true">&rarr;</span>
                </Link>
              </div>

              <div className="py-4 lg:px-8 text-white w-[90%] mx-auto lg:mx-0 lg:w-full">
                <div className=" w-full flex items-start gap-3 justify-between">
                  <article className="">
                    <h3 className="font-semibold text-2xl leading-normal">
                      {product?.name}
                    </h3>

                    <p className="text-lg font-medium leading-normal my-1">
                      ${product?.price}
                    </p>
                  </article>

                  <button
                    className="bg-gray-300 py-2 px-4 rounded-md text-gray-900 font-semibold text-sm transition-colors duration-300 hover:text-cyan-500 cursor-pointer"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    Buy template
                  </button>
                </div>

                <TemplateDescription
                  description={product?.description}
                  tools={product?.tech}
                />
              </div>
            </section>
          )}
        </div>
      </main>

      {openModal && (
        <CheckoutModal
          handleChange={handleChange}
          formValues={formValues}
          price={product?.price}
          initializePayment={initializePayment}
          onSuccess={onSuccess}
          onClose={onClose}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default Template;
