import ContactBanner from "@/components/ContactBanner";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex bg-amber-600 p-2 justify-end">
        <ContactBanner />
      </div>

      <div className="flex p-1 text-xs justify-center text-gray-500">
        © 2024 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
