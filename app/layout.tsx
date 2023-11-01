import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

const font = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
