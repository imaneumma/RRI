import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex py-6 px-6 items-center space-x-6">
      <Link
        href="/"
        className="text-gray-700 text-4xl inline-block align-baseline"
      >
        LMS
      </Link>
      <Link href="/dashboard" className="text-gray-700">
        Dashboard
      </Link>
      <Link href="/profile" className="text-gray-700">
        Profile
      </Link>
      <Link href="/courses" className="text-gray-700">
        Courses
      </Link>

      <Link
        href="/profile"
        className="text-gray-700 rounded-full border-red-400 inline-block"
      >
        Profile
      </Link>

      <div className="text-gray-700 rounded-full border-red-400 inline-block">
        Profile
      </div>
    </nav>
  );
};

export default Navbar;
