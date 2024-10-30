import Image from "next/image";

import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <div className="flex ">
      <div className="logo-wrapper py-4 px-4 pt-6 bg-sky-500 rounded-md">
        <Image
          className="flex-none dark:invert "
          src="/rri-logo-left-crop.png"
          alt="Read Right Institute logo"
          width={250}
          height={96}
          priority
        />
      </div>
      <div className="flex-col grow ">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
