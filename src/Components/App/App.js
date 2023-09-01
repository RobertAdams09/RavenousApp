import React, { useState }from 'react'
import SearchBar from "../SearchBar/SearchBar";
import BusinessList from "../BusinessList/BusinessList";
import search from "../../Utils/Utils"; 
import './App.css';


function App() {
  const [businesses, setBusinesses] = useState([])

  const searchYelp = async (term, location, sortBy) => {
  const businesses = await search(term, location, sortBy);
  setBusinesses(businesses)
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ravenous</h1>
      </header>
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses = {businesses}/>
    </div>
  );
}

export default App;
