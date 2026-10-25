
// //API KEY
// //  AIzaSyB8MFtl6kTQBchYsx8n_nDzXUPYVAB9uaQ

// //CHANNEL ID
// UCE_M8A5yxnLfW0KghEeajjw

// https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyB8MFtl6kTQBchYsx8n_nDzXUPYVAB9uaQ


// link = https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=10&key=AIzaSyB8MFtl6kTQBchYsx8n_nDzXUPYVAB9uaQ&order=date


import "./App.css"
import Home from './pages/Home';
import Favorites from "./pages/favorites";
import NavBar from "./NavBar";
import { MovieProvider } from "./service/Moviecontext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <section id="home"><Home /></section>
        <section id="favorites"><Favorites /></section>
      </main>
    </MovieProvider>
  )
}

export default App
