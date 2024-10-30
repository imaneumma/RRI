import localFont from "next/font/local";
import "@/base/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <div className="bg-sky-50">
          <div className="max-w-6xl m-auto">
            <Header />
            <div className="">{children}</div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
