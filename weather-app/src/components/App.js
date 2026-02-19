import { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import Loader from "./Loader";
import Error from "./Error";
import DisplayData from "./DisplayData";

const API_KEY = "8626df4872314db292c192005261902";
function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    if (city.length < 3) {
      setError("City Name must be at least 3 characters!");
      return;
    }

    setError("");
  }

  useEffect(() => {
    async function fetchData(cityName) {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`,
        );

        if (!res.ok) throw new Error("Something happen while fetching data");

        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err?.message || "City not found!");
        setData({});
      } finally {
        setLoading(false);
      }
    }

    if (city) {
      fetchData(city);
    } else {
      fetchData("Addis Ababa");
    }
  }, [city]);

  return (
    <div className="App">
      <Header />
      <Search city={city} onSearch={handleSearch} setCity={setCity} />
      {loading && <Loader />}
      {!loading && !error && <DisplayData data={data} />}
      {error && <Error message={error} />}
    </div>
  );
}

export default App;
