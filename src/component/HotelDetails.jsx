import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHotel() {
      try {
        const res = await axios.get(`https://demohotelsapi.pythonanywhere.com/hotels/${id}`);
        const data = res.data.data; // adjust based on API response
        const found = data.find((item) => item.id.toString() === id);
        setHotel(found || null);
      } catch (err) {
        console.error(err);
        setHotel(null);
      } finally {
        setLoading(false);
      }
    }

    fetchHotel();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!hotel) return <div>Hotel not found</div>;

  return (
    <div className="p-5">
      <h1>{hotel.name}</h1>
      <img src={hotel.thumbnail} alt={hotel.name} />
      <p>{hotel.description}</p>
      <p>Location: {hotel.location}</p>
      <p>Price: ${hotel.price}</p>
      <img src={hotel.photos} alt={hotel.name} />
    </div>
  );
};

export default HotelDetails;
