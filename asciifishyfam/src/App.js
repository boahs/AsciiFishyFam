import './App.css';
import React from "react";
import banner from './bannerAsciiTransparent.png';
import topBanner from './banner2.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import FaqSection from './FaqSection';

function App() {
  library.add(fab, faCheckSquare, faCoffee);

  return (
    <div className="App">
      <header className="App-header">
        <div className="fading">
          <img src={topBanner} alt="Ascii Fishy Fam banner" width="100%" height="auto" />
        </div>
        
        <img src={banner} alt="Ascii Fishy Fam logo" width="100%" height="auto" />
        
        <div className="box">
          <h5>FISHY NEWS</h5>
          <h1>November 2024</h1>
          <h3>50 AIRDROPS COMPLETED!</h3>
          <h6>30 MORE FISHIES MINTED AT FLOOR PRICE</h6>
          <h6>MEMES OVER PROMISES. SWIM ON.</h6>
        </div>
        
        <div className="cards">
          <p>Ascii Fishy Fam is a collection of unique NFTs transformed into ASCII art. ASCII art is a digital art form as old as the internet, pieced together from a set of 128 characters defined by the ASCII standard in 1963. Our ASCII Fishy Fam are fully crafted using text—zoom in to see the details!</p>
          
          <h1>Connect with the Fam</h1>
          <div className="services">
            <div className="content content-1">
              <div className="fab fa-opensea"></div>
              <h2>OpenSea</h2>
              <p>Buy your fishy memes here.</p>
              <a href="https://opensea.io/collection/asciifishyfam" aria-label="Buy on OpenSea">BUY</a>
            </div>
            
            <div className="content content-2">
              <div className="fab fa-twitter"></div>
              <h2>X (formerly Twitter)</h2>
              <p>Follow us for laughs, updates, and airdrops!</p>
              <a href="https://twitter.com/AsciiFishyFam" aria-label="Follow on X">FOLLOW</a>
            </div>
          </div>

          <FaqSection />

          <div className="sprite sprite1"></div>
          <div className="sprite sprite2"></div>
          <div className="sprite sprite3"></div>
        </div>
        
        <section className="sticky">
          <div className="bubbles">
            {Array(10).fill().map((_, i) => <div key={i} className="bubble"></div>)}
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
