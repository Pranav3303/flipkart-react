import { useState } from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 bg-[#2874f0] flex items-center gap-5 w-full py-2.5 px-32 p z-50">
      {/* LOGO */}
      <Link to="/"><img
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-11f9e2.svg"
        alt="flipkart-logo"
        className="w-50 cursor-pointer"
      /></Link>
      

      {/* SEARCH BAR */}
      <div className="flex flex-1 border-s-black max-w-3xl">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="w-full bg-white px-4 py-2 text-lg outline-line rounded-l-sm"
        />
        <button className="bg-white px-4 text-[#2874f0] font-bold">
          <img src="https://img.icons8.com/?size=38&id=3159&format=png&color=000000" alt="search-icon" />
        </button>
      </div>

      {/* RIGHT MENU */}
      <div className="flex items-center gap-6 text-white text-lg font-medium relative">
        {/* LOGIN */}
        <div
          className="relative cursor-pointer whitespace-nowrap"
          onMouseEnter={() => setLoginOpen(true)}
          onMouseLeave={() => setLoginOpen(false)}
        >
          <Link to="/login"><button className="bg-white text-[#2874f0] px-6 py-1 font-bold rounded-sm">
          Login
          </button></Link>
          
          {loginOpen && (
            <div className="absolute top-9 right-0 bg-white text-black w-56 shadow-lg border rounded-sm z-50">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to="/signup"><button className="rounded p-2">New Customer? Signup</button></Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="rounded p-2">My Profile</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="rounded p-2">Flipkart Plus Zone</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="rounded p-2">Order</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="rounded p-2">Wishlist</button>
                </li> 
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="rounded p-2">Rewards</button>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <button className="rounded p-2">Gift Cards</button>
                </li>               
              </ul>
            </div>
          )}
        </div>
        
        <Link to='/member'><span className="cursor-pointer whitespace-nowrap">
          Become a Seller
        </span></Link>
        

        {/* MORE DROPDOWN */}
        <div
          className="relative cursor-pointer whitespace-nowrap"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <Link to='/more'><span className="flex items-center gap-1">
            More <span className="text-xs">▼</span>
          </span></Link>
          

          {open && (
            <div className="absolute top-8 bg-white text-black w-56 shadow-lg border rounded-sm z-50">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to='/more/notification'><button className="rounded p-2">Notification Preferences</button></Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to='/more/customer-care'><button className="rounded p-2">Customer Care</button></Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to='/more/advertise'><button className="rounded p-2">Advertise</button></Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Link to='/more/download-app'><button className="rounded p-2">Download App</button></Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* CART */}
        <Link to='/cart'><span className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
          🛒 Cart
        </span></Link>
      </div>
    </div>
  );
}

export default Navbar;
