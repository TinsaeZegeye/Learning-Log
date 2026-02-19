export default function Search({ city, setCity, onSearch }) {
  return (
    <form onSubmit={(e) => onSearch(e)}>
      <input
        className="city-search"
        type="text"
        placeholder="Enter City Name...."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
}
