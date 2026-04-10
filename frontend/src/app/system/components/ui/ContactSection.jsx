import React from "react";
import { X } from "lucide-react";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import PhoneInput from "./PhoneInput";
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const ContactSection = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <section className="w-full lg:w-1/2 bg-[#2ea3d1] min-h-screen flex items-center justify-center relative overflow-hidden px-6 sm:px-10 lg:px-16 py-12">
      {/* Premium Background Glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-25 -left-20 w-72 h-72 bg-black/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="w-full max-w-md lg:max-w-lg">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-white leading-tight mb-4">
            You Are A Step Closer To Building Your Vision Into Reality
          </h2>

          <p className="text-white/90 text-sm sm:text-base">
            Fill your details and we’ll get back within{" "}
            <span className="font-semibold">24 hours</span>.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            placeholder="Your Name"
            name="user_name"
            Icon={UserIcon}
            required
          />

          <FormInput
            type="email"
            placeholder="Work Email"
            name="user_email"
            Icon={EnvelopeIcon}
            required
          />

          <PhoneInput />

          <FormTextArea
            placeholder="Tell us about your project..."
            name="message"
            Icon={ChatBubbleBottomCenterTextIcon}
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3.5 sm:py-4 rounded-full
               text-sm sm:text-base font-semibold tracking-wide
               hover:bg-gray-900 active:scale-[0.98]
               transition-all duration-200 shadow-lg">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
