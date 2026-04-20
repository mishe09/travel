import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Honeymoon from "../pages/Honeymoon/Honeymoon";
import UpComingPackage from "../pages/UpcomingPackage/UpcomingPackage";
import Location from "../pages/Location/Location";
import Tourplan from "../pages/Tourplan/Tourplan";
import Gallery from "../pages/Gallery/Gallery";
import Packages from "../pages/Packages/Packages";
import Musicpackage from "../pages/Musicpackage/Musicpackage";
import Layout from "../Layout/Layout";

const RoutesProvider = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/honeymoon" element={<Honeymoon />} />
          <Route path="/tourplan" element={<Tourplan />} />
          <Route path="/location" element={<Location />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/upcoming-package" element={<UpComingPackage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/musicpackage" element={<Musicpackage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesProvider;
