import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from "./components/Banner"
import Navbar from './components/Navbar';

function App() {
  return (



    <div className="app">
      {/* navbar */}
      <Navbar/>
      {/* banner */}
      <Banner />
      {/* body */}
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasy} />
    </div>
  );
}

export default App;
