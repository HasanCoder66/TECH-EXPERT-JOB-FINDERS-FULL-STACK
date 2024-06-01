import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import resumeTwo from "../../assets/templates/cv-template-02.png";
import { useDispatch, useSelector } from "react-redux";
import { resumeSuccess } from "../../Redux/Slices/resumeSlices";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { FiX } from "react-icons/fi";

const SelectResumeTemplateCard = ({ data, route, activeTab }) => {
  const dispatch = useDispatch();
  const { _id } = data;

  console.log(data);
  console.log(route);
  console.log(activeTab);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { resumeTemplateName, category, price } = data;
  const stripePromise = loadStripe(
    "pk_test_51PLqWt06k5m2AJAi3kLvFyaGeGvRjX8FmmJcI7XwgTy43lxHPUqjKDBXgMNYczRHA2MHOCULQ6xmUuPr9E5T9o5e00CXzikXse"
  );

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        {
          name: "salik",
          amount: 100 * 100, // Amount in cents
        }
      );

      const session = response.data;
      console.log(session.id);
      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      <Card
        // style={{ width: "180px" }}
        className="w-full group/item overflow-hidden relative justify-center  rounded-lg cursor-pointer bg-white drop-shadow-lg m-[2rem]"
      >
        <div className=" object-contain overflow-hidden">
          <div className="wrapper bg-white p-4 object-cover">
            <Card.Img
              variant="top"
              src={resumeTwo}
              className="object-contain rounded-lg"
            />
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="relative text-center">
            <p className="text-3xl pt-2 text-yellow-300">
              {resumeTemplateName}
            </p>
          </div>
        </div>

        <div className="selectTemplateButton group-hover/item:flex hidden absolute top-0 left-0 w-full h-full border-[0.2rem] border-neutral-700 items-center justify-center">
          {activeTab !== "premium" ? (
            <Link to={route}>
              <button
                onClick={dispatch(resumeSuccess({ templateId: _id }))}
                className="selectTemplateButton bg-neutral-700 py-[0.8rem] px-[1.5rem] text-[1.6rem] leading-[1.6rem] text-white rounded-md "
              >
                Select
              </button>
            </Link>
          ) : (
            <Link onClick={openModal}>
              <button className="selectTemplateButton bg-neutral-700 py-[0.8rem] px-[1.5rem] text-[1.6rem] leading-[1.6rem] text-white rounded-md ">
                Select
              </button>
            </Link>
          )}
        </div>
      </Card>
      {isModalOpen && (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-[600px] relative">
            <button className="absolute top-4 right-4" onClick={closeModal}>
              <FiX className="text-theme-red" size={24} />
            </button>
            <h2 className="text-center text-4xl font-semibold mb-4 text-theme-red">
              Purchase This Template
            </h2>
            <hr />
            <div className="mt-12 flex flex-col justify-center items-center">
              <h2 className="text-center text-4xl font-semibold mb-4 text-theme-red">
                This is a Premium Template
              </h2>
              <h2 className="text-center text-2xl font-semibold mb-4 text-theme-black">
                Corporate 5$
              </h2>
              <button
                onClick={handleCheckout}
                className="bg-theme-yellow w-[40%] text-2xl p-4"
              >
                Pay with credit card
              </button>
              <hr />
            </div>

            <div className="mt-14 flex flex-col justify-center items-center">
              <h2 className="text-center text-4xl font-semibold mb-4 text-theme-red">
                Get a Subscription Plan for ($ 4.99)/ Month
              </h2>
              <h2 className="text-center text-2xl font-semibold mb-4 text-theme-black">
                Get access to all Resume Template, Cover Letter Template,
                Download in PDF and JPG.
              </h2>
              <button className="bg-theme-yellow w-[40%] text-2xl p-4">
                Pay with credit card
              </button>
            </div>

            {/* Hidden file input element */}
            <input id="fileInput" type="file" style={{ display: "none" }} />
          </div>
        </div>
      )}
    </>
  );
};

export default SelectResumeTemplateCard;
