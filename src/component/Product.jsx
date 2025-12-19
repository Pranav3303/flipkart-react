import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "./card";

const Product = () => {
  const PAGE_SIZE = 15;
  const [current, setCurrent] = useState(0);
  const [hotels, setHotels] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  let url = `https://demohotelsapi.pythonanywhere.com/hotels/?limit=${PAGE_SIZE}&skip=${
    current * PAGE_SIZE
  }`;

  async function hotelFetch() {
    setLoading(true); // start skeleton
    let data = await axios.get(url);
    let newData = data.data.data;

    if (newData.length === 0) {
      setHasMore(false);
    } else {
      setHotels((prev) => [...prev, ...newData]);
    }

    setLoading(false); // stop skeleton
  }

  useEffect(() => {
    hotelFetch();
  }, [current]);

  function loadMore() {
    if (hasMore) setCurrent((prev) => prev + 1);
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex">
          <div className="w-75 h-screen p-4">
            <h1 className="text-xl font-semibold mb-4">Filters</h1>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Location</label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Price Range</label>
              <input type="range" min="0" max="500" className="w-full" />
              <div className="flex justify-between text-sm text-gray-500">
                <span>$0</span>
                <span>$500</span>
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Rating</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All</option>
                <option>1★ & up</option>
                <option>2★ & up</option>
                <option>3★ & up</option>
                <option>4★ & up</option>
              </select>
            </div>

            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
              Apply Filters
            </button>
          </div>
        </div>

        {loading && hotels.length === 0 && (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} />
            ))}
          </>
        )}

        {loading && hotels.length > 0 && (
          <>
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={`lazy-${i}`} />
            ))}
          </>
        )}

        {!loading &&
          hotels.map((el, index) => (
            <div
              key={index}
              className="bg-white w-100 h-150 border-2 border-black rounded-2xl"
            >
              <div>
                <img
                  width="400"
                  height="200"
                  className="w-100 h-75 rounded-2xl"
                  src={el.thumbnail}
                  alt=""
                />
              </div>

              <div className="px-10 flex flex-col gap-3">
                <div className="flex justify-between">
                  <h3>{el.name}</h3>
                  <div className="w-25 mt-2 flex gap-2">
                    <StarRating rating={el.rating} />
                  </div>
                </div>

                <div className="flex gap-2">
                  <FaLocationArrow />
                  {el.location}
                </div>

                <div>{`${el.description.slice(0, 200)}...`}</div>

                <h6>${el.price}</h6>
                <div className="flex justify-between">
                  <button
                    onClick={() => navigate(`/hoteldetails`)}
                    className="px-4 py-2 rounded-2xl bg-blue-500 text-white"
                  >
                    View Details
                  </button>
                  <button className="px-4 py-2 rounded-2xl bg-blue-500 text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-5">
          <button
            onClick={loadMore}
            className="px-7 py-3 bg-green-700 text-white rounded-2xl"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};

export default Product;

function StarRating({ rating }) {
  return Array.from({ length: Math.ceil(rating) }).map((_, i) => (
    <FaStar key={i} style={{ color: "yellow" }} />
  ));
}
