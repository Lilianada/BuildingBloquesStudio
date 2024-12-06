import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../../utils/template";
import Header from "../Header";
import TemplateDescription from "./TemplateDescription";
import { usePaystackPayment } from "react-paystack";
import TemplateCarousel from "./TemplateCarousel";
import CheckoutModal from "./CheckoutModal";
import CheckoutForm from "./CheckoutForm";
import Footer from "../Footer";

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
        <div className="mx-auto  max-w-7xl w-full md:w-[90%] lg:w-full pt-28 lg:pt-32 pb-5 ">
          <section className="flex justify-between md:max-w-[700px] xl:max-w-[1200px] w-full md:mx-auto px-6 md:px-0 md:gap-10">
            <div className="w-full md:h-[85vh] md:overflow-y-auto custom-scroll">
              {product && (
                <>
                  <div className="max-w-[550px] w-[90%] mx-auto md:w-full ">
                    <TemplateCarousel productImages={product?.img} />
                  </div>
                  <div className=" w-full flex items-center gap-3 justify-between my-5">
                    <article className="text-white">
                      <h3 className="font-semibold text-2xl leading-normal">
                        {product?.name}
                      </h3>

                      <p className="text-lg font-medium leading-normal my-1">
                        ${product?.price}
                      </p>
                    </article>

                    <Link
                      to={product?.link}
                      target="_blank"
                      className="hidden md:flex gap-2 text-sm font-semibold leading-6 text-cyan-400 transition-colors duration-300 hover:text-cyan-200 cursor-pointer my-3"
                    >
                      Preview Project<span aria-hidden="true">&rarr;</span>
                    </Link>
                    <button
                      className="md:hidden bg-gray-300 py-2 px-4 rounded-md text-gray-900 font-semibold text-sm transition-colors duration-300 hover:text-cyan-500 cursor-pointer"
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
                    url={product?.link}
                    features={product?.features}
                  />
                </>
              )}
            </div>
            <div className=" hidden md:block max-w-[450px] w-full">
              <CheckoutForm
                handleChange={handleChange}
                formValues={formValues}
                price={product?.price}
                checkout={initializePayment}
              />
            </div>
          </section>
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
      <Footer />
    </>
  );
};

export default Template;
