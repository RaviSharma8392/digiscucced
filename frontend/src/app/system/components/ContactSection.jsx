import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  User,
  MessageSquare,
  Instagram,
  PhoneCall,
} from "lucide-react";

const ContactSection = () => {
  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center p-6 md:p-12 lg:p-24 font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
        {/* Left Column - Contact Info */}
        <div className="flex flex-col justify-center">
          <span className="text-gray-500 font-medium text-sm mb-2">
            Contact Form
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Have a question?
            <br />
            Contact us now
          </h1>
          <p className="text-gray-600 text-lg mb-10 max-w-md">
            Have questions or need assistance? Our friendly team is ready to
            provide all the info you need — just get in touch.
          </p>

          {/* Contact Details List */}
          <div className="space-y-8">
            {/* Location 1 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-full text-gray-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">
                  343, Sector 12A, Near Canara Bank
                </p>
                <p className="text-gray-500 text-sm mt-0.5">
                  Rajendra Space, Awas Vikas Colony, Sikandra, Agra, UP-282007
                </p>
              </div>
            </div>

            {/* Location 2 */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-full text-gray-500">
                <MapPin size={20} />
              </div>
              <div className="flex items-center h-full">
                <p className="font-semibold text-gray-900 text-base mt-2.5">
                  Kotdawar, Uttarakhand
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-full text-gray-500">
                <Mail size={20} />
              </div>
              <div className="flex items-center h-full">
                <p className="font-semibold text-gray-900 text-base mt-2.5">
                  partnerships@futuredesks.in
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gray-50 rounded-full text-gray-500">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-base">
                  +91 85995689310
                </p>
                <p className="font-semibold text-gray-900 text-base mt-0.5">
                  +91 8938121313
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex flex-col justify-center">
          <form className="w-full max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-100 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-100 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-100 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Subject Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <MessageSquare size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-100 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="relative mb-6">
              <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-400">
                <MessageSquare size={18} />
              </div>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full pl-11 pr-4 py-3.5 bg-gray-50/80 border border-gray-100 rounded-2xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder:text-gray-400 resize-none"></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-medium py-3.5 px-8 rounded-xl transition-colors duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Floating Social Icons */}

      {/* Instagram Bottom Left */}
      <div className="fixed bottom-8 left-8 cursor-pointer hover:scale-110 transition-transform shadow-lg rounded-2xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
        <div className="bg-white rounded-xl p-2">
          <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-lg p-1.5 text-white">
            <Instagram size={28} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* WhatsApp Bottom Right */}
      <div className="fixed bottom-8 right-8 cursor-pointer hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.3)] rounded-full bg-white p-1">
        <div className="bg-[#25D366] text-white p-3 rounded-full">
          <PhoneCall size={32} fill="currentColor" strokeWidth={0} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
