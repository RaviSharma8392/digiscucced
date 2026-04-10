import ContactSection from "../components/ui/ContactSection";
import LeftInfoSection from "../components/ui/LeftInfoSection.jsx";

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT SECTION */}

      <LeftInfoSection />
      {/* RIGHT SECTION */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
