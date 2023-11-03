import "../styles/globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import MountedClient from "./components/MountedClient";
import RegisterModal from "./components/Modals/RegisterModal";
import ReduxProvider from "./providers/ReduxProvider";

const font = Nunito({
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  /* navbar useclient olduğu için MountedClient ile sarmaladım */
  return (
    <html lang="en">
      <body className={font.className}>
        <ReduxProvider>
          <MountedClient>
            <RegisterModal />
            <Navbar />
          </MountedClient>
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;
