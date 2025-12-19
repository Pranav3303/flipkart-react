
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './component/Product';
import HotelDetails from './component/HotelDetails';

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="/hoteldetails/:id" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}

export default Index;
