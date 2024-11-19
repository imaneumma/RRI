import localFont from "next/font/local";
import "@/base/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const geistSans = localFont({
  src: "/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Read Right Institute",
  image: "/rri-mini-logo.png",
  description: "Read Right Institute - Learning Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-orange-50">
          <div className="flex max-h-[680px] overflow-hidden absolute m-auto left-0 right-0 justify-center items-center">
            {/* <Image
              className=""
              src="/bg-images/write.jpg"
              alt="read right main page"
              width={1160}
              height={680}
              priority
            /> */}
          </div>

          <div className="max-w-6xl m-auto relative">
            <Header />
            <div className="mt-4">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
