import Link from "next/link";
import CallOutlined from "@mui/icons-material/CallOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

const ContactBanner = () => {
  return (
    <nav className="flex space-x-4 items-center text-xs">
      <Link href="/" className="text-white inline-block align-baseline">
        Have any question?
      </Link>
      <Link href="tel:+923014184111" className="text-white">
        <CallOutlined fontSize="small" /> +92 301 418 4111
      </Link>
      <Link href="mailto:readrightinstitute@gmail.com" className="text-white">
        <EmailOutlined fontSize="small" /> readrightinstitute@gmail.com
      </Link>
    </nav>
  );
};
export default ContactBanner;
