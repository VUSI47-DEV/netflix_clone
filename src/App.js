import react from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        {/* <Row title = 'NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals}/> */}
        <Row title = 'NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals}/>
        <Row title = 'TRENDING' fetchUrl = {requests.fetchTrending}/>
        <Row title = 'TOP RATED' fetchUrl = {requests.fetchTopRated}/>
        <Row title = 'ACTION MOVIES' fetchUrl = {requests.fetchActionMovies}/>
        <Row title = 'COMEDY MOVIES' fetchUrl = {requests.fetchComedyMovies}/>
        <Row title = 'HORROR MOVIES' fetchUrl = {requests.fetchHorrorMovies}/>
        <Row title = 'ROMANCE MOVIES' fetchUrl = {requests.fetchRomanceMovies}/>
        <Row title = 'NOW PLAYING' fetchUrl = {requests.fetchDocumentatires}/>


    </div>
  );
}

export default App;
