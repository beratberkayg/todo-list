"use client";
import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import MountedClient from "./components/MountedClient";
import Modal from "./components/Modals/Modal";

const font = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  /* navbar useclient olduğu için MountedClient ile sarmaladım */
  return (
    <html lang="en">
      <body className={font.className}>
        <MountedClient>
          <Modal
            isOpen
            onSubmit={() => {}}
            onClose={() => {}}
            btnLabel="Kayıt Ol"
            title="Kayıt Ol"
          />
          <Navbar />
        </MountedClient>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
