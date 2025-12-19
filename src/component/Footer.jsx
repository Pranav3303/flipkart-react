import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-[#172337] text-white text-sm mt-10">
      
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-6 gap-6">

        {/* ABOUT */}
        <div>
          <h4 className="text-gray-400 mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
            <li>Press</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h4 className="text-gray-400 mb-3">HELP</h4>
          <ul className="space-y-2">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* POLICY */}
        <div>
          <h4 className="text-gray-400 mb-3">POLICY</h4>
          <ul className="space-y-2">
            <li>Return Policy</li>
            <li>Terms Of Use</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-gray-400 mb-3">SOCIAL</h4>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>

        {/* MAIL US */}
        <div className="md:col-span-2 border-l border-gray-600 pl-2">
          <h4 className="text-gray-400 mb-3">Mail Us:</h4>
          <p className="text-xs leading-5">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>
        </div>

        {/* REGISTERED OFFICE */}
        <div className="md:col-span-2 border-l border-gray-600 pl-6">
          <h4 className="text-gray-400 mb-3">Registered Office Address:</h4>
          <p className="text-xs leading-5">
            Flipkart Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br />
            CIN : U51109KA2012PTC066107
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <span>🛍️ Become a Seller</span>
            <span>📢 Advertise</span>
            <span>🎁 Gift Cards</span>
            <span>❓ Help Center</span>
          </div>
          <p className="text-xs text-gray-400">
            © 2007-2025 Flipkart.com
          </p>
        </div>
      </div>

    </footer></div>
  )
}

export default Footer