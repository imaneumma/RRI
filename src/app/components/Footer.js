import ContactBanner from "@/components/ContactBanner";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex bg-sky-500 p-2 justify-end">
        <ContactBanner />
      </div>

      <div className="flex bg-sky-100 p-1 text-xs justify-center text-gray-500">
        © 2024 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
