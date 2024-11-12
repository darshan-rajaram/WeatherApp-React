import "./App.css";
import LocationSearchBar from "./Components/LocationSearchBar/LocationSearchBar.jsx";

function App() {
  function handleSearch(location) {
    console.log("Location: " + location);
  }
  return (
    <div className="App">
      <LocationSearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
