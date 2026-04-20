import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Layout.css";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="page-container">{children}  </div>
      <Footer />
    </>
  );
}
