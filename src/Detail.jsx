import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./component/Product";
import HotelDetails from "./component/HotelDetails";

function Details() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}

export default Details;
