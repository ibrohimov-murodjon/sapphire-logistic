import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Button, Input } from "../components";
import { CallImgWhite, EmailIcon, LocationWhite } from "../assets";

const Modal = ({ showModal, onClose }) => {
  const modalRef = useRef();
  const handleCloseModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    const closeModalOnEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeModalOnEsc);

    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, [onClose]);
  if (!showModal) return null;
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={handleCloseModal}
      ref={modalRef}
    >
      <div className="bg-[#3E4095] p-8 rounded-md shadow-lg">
        <p className="text-2xl font-semibold mb-4">
          Thank you for your response!
        </p>
        <p>We will get back to you soon.</p>
        <button
          onClick={onClose}
          className="mt-6 py-2 px-4 advantages text-white rounded-md font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "sapphire_contact",
        "template_bhn7ydn",
        form.current,
        "XzkuS0Go_OO3rQsRn"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setShowModal(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="advantages py-24" id="contact">
      <div className="mx-auto w-full max-w-[1246px] px-[20px] flex items-center justify-around tabletMax:flex-col tabletMax:gap-y-5">
        <div className="flex items-start justify-center flex-col gap-y-3 w-full max-w-[500px]">
          <h1 className="text-white text-[50px] font-bold">Contact US</h1>
          <span className="flex flex-col items-start justify-center">
            <img src={CallImgWhite} className="w-8 h-8 mb-2" alt="" />
            <h4 className=" font-bold text-[20px]">Phone Numbers</h4>
            <div className="flex items-center gap-8">
              <a
                href="tel:(224) 222-1201"
                className="underline underline-offset-2"
              >
                (224) 222-1201
              </a>
              <a
                href="tel:(224) 222-0582"
                className="underline underline-offset-2"
              >
                (224) 222-0582
              </a>
            </div>
          </span>
          <span className="flex flex-col items-start justify-center">
            <img src={EmailIcon} className="w-8 h-8 mb-2" alt="" />
            <h4 className=" font-bold text-[20px]">Email</h4>
            <a href="mailto:info@sapphire-transportation.com">
              info@sapphire-transportation.com
            </a>
          </span>
          <span className="flex flex-col items-start justify-center">
            <img src={LocationWhite} className="w-8 h-8 mb-2" alt="" />
            <h4 className=" font-bold text-[20px]">Location</h4>
            <p>570 Le Parc CIR, Buffalo Grove, IL 60089 </p>
          </span>
        </div>
        <div className="flex rounded-[10px] flex-col lightBlue w-full max-w-[600px] py-10 px-14 mobileMax:max-w-[500px] mobileLg:max-w-[400px] mobileLg:px-8 mobileMd:max-w-[350px] mobileMd:px-4  mobileSm:max-w-[320px]">
          <h1 className="text-black text-[40px] font-bold mb-2 mobileMax:text-[35px] mobileLg:text-[30px] mobileLg:mb-8 mobileMd:mb-4 mobileMd:text-[25px]">
            Request to Contact
          </h1>
          <form action="" ref={form} onSubmit={sendEmail}>
            <div className="flex items-center gap-4 mb-4">
              <Input
                name="user_number"
                placeholder="Phone Number *"
                type="text"
                required={true}
              />
              <Input
                name="user_email"
                placeholder="Email *"
                type="email"
                required={true}
              />
            </div>
            <textarea
              placeholder="How can we help?"
              name="message"
              cols="30"
              rows="7"
              className="rounded-[10px] w-full border border-[#C8354B] mb-4 p-4 text-gray-800 bg-inherit"
            ></textarea>
            <span className="mobileMax:flex items-center justify-center">
              <Button type="submit" title="Get Help" bgColor="#3E4095" />
            </span>
          </form>
        </div>
      </div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-primaryClr"></div>
        </div>
      )}
      <Modal showModal={showModal} onClose={closeModal} />
    </div>
  );
};

export default Contact;
