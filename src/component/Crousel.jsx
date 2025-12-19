import { useEffect, useState } from "react";


const Crousel = () => {
  const banners = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a64908ba9bf2fe36.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e94a135f02381d3a.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=90",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=90"
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    },2000);
    return () => clearInterval(interval);
  },[banners.length]);

  const prevSlide = () => {
    setIndex(index === 0 ? banners.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex((index + 1) % banners.length)
  }
  return (
    <>
      <div className="relative overflow-visible bg-grey-100 m-2.5">
        <div className="flex transition-transform duration-75 ease-in-out"
          style={{transform: `translateX(-${index * 100}%)`}}
        >
          {banners.map((banner, index) => (
            <img key={index} src={banner} alt="banner" className="w-full h-56" />
          ))}
        </div>
        <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white px-3 py-5 shadow-md text-xl font-bold"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white px-3 py-5 shadow-md text-xl font-bold"
      >
        ›
      </button>
      </div>
    </>
  )
}

export default Crousel