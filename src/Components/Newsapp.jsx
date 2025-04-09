import { useEffect, useState } from "react";
import Card from "./Card";
import "./Newsapp.css";
import Footer from "./Footer";

const Newsapp = () => {
  // Initial state setup
  useEffect(() => {
    getdata(); // Fetch initial news for 'india'
  }, []);

  const [search, setsearch] = useState("india");
  const [newsdata, setnewsdata] = useState(null);
  const [loading, setLoading] = useState(false);

  const apikey = import.meta.env.VITE_API_NEWS;

  // Fetching data based on search term (category or query)
  const getdata = async () => {
    setLoading(true);
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${apikey}`
    );
    const jsondata = await response.json();
    console.log(jsondata.articles);
    setnewsdata(jsondata.articles);
    setLoading(false);
  };

  // Handle text input change (search bar)
  const handleinput = (e) => {
    setsearch(e.target.value);
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    setsearch(category); // Update search term to the category
    // Fetch news data for the selected category
  };
  useEffect(() => {
    getdata();
  }, [search]);

  return (
    <>
      <nav>
        <div>
          <h1>NewsHunter</h1>
        </div>
        <ul>
          <li onClick={() => handleCategoryClick("india")}>All News</li>
          <li onClick={() => handleCategoryClick("trending")}>Trending</li>
        </ul>
        <div className="Searchbar">
          <input type="text" placeholder="Search News" onChange={handleinput} />
          <button onClick={getdata}>Search</button>
        </div>
      </nav>

      <div>
        <p className="heading">Stay Updated with NewsHunter</p>
      </div>

      <div className="categorybtn">
        <button onClick={() => handleCategoryClick("sports")}>Sports</button>
        <button onClick={() => handleCategoryClick("Politics")}>
          Politics
        </button>
        <button onClick={() => handleCategoryClick("Entertainment")}>
          Entertainment
        </button>
        <button onClick={() => handleCategoryClick("Health")}>Health</button>
        <button onClick={() => handleCategoryClick("Technology")}>
          Technology
        </button>
        <button onClick={() => handleCategoryClick("Fitness")}>Fitness</button>
      </div>

      <div className="cardcontainer">
        {loading ? (
          <p className="load">Loading...</p> // Show loading message
        ) : (
          newsdata && <Card data={newsdata} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Newsapp;
