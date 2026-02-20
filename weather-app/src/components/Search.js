export default function Search({ city, setCity, onSearch }) {
  return (
    <form onSubmit={(e) => onSearch(e)}>
      <div className="form-container">
        <input
          className="city-search"
          type="text"
          placeholder="Enter City Name...."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={(e) => onSearch(e)}>Search</button>
      </div>
    </form>
  );
}
