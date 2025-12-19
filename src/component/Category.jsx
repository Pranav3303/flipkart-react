import React from 'react'

const Category = () => {
  const catageries = [
    {
      name: "Minutes",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e00302d428f5c7be.png?q=100",
    },
    {
      name: "Mobiles & Tablet",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
    },
    {
      name: "Fashion",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100",
    },
    {
      name: "Electronics",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100",
    },
    {
      name: "TVs & Applinaces",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
    },
    {
      name: "Home & Furniture",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100",
    },
    {
      name: "Flight Booking",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100",
    },
    {
      name: "Beauty & Toys",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100",
    },
    {
      name: "Grocery",
      img: "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100",
    }
  ]
  return (
    <>
      <div className="bg-white shadow-sm py-3 mt-18 mb-2 mx-3">
      <div className="flex justify-around overflow-x-auto px-4 gap-6">
        {catageries.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center min-w-20 cursor-pointer group"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-16 h-16 object-contain"
            />
            <span className="text-sm font-medium mt-1 group-hover:text-[#2874f0]">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Category