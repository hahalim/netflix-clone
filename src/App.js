import React from "react";
import Row from "./Row";
import Banner from "./Banner";
import "./App.css";
import Nav from "./Nav";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOrignals} />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrerMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
