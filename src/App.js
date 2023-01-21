import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Main2 from './components/Main2';
import Trending from './components/Trending';
import Bottle from './components/Bottle';
import Justify from './components/Justify';
import Smart from './components/Smart';
import Gif from "./components/Gif"
import GSAP from './components/GSAP';
import Basq from './components/Basq';
import Footer from "./components/Footer"
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';



function App() {
  const { currentUser } = useContext(AuthContext)

  return (
    <div className="App">

      <Navbar profileName={currentUser?.email} profileImg={currentUser?.photoURL} />
      <Main />
      <Main2 />
      <Trending />
      <Bottle />
      <Justify />
      <Smart />
      <Gif />
      <GSAP />
      <Basq />
      <Footer />
    </div>
  );
}

export default App;
