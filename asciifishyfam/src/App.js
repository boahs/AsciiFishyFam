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
          <h1>Latest Post - November, 2024</h1>
          <h3>AIRDROPS SENT OUT! SEE SOCIAL MEDIA SECTION BELOW!</h3>
          <h6>INTERACTIVE USE CASES COMING SOON WITH OPENSEA API INTEGRATION!</h6>
          <h6>NEW ROADMAP THIS MONTH!</h6>
          <h6>WEBSITE ENHANCEMENTS IN PROGRESS!</h6>
          <h6>WALLET API INTEGRATION COMING SOON!</h6>
          <h6>DIRECT ASCII ART CODE DELIVERY POST-PURCHASE!</h6>
          <h6>COMMUNITY POLLING OPTION!</h6>
        </div>
        
        <div className="cards">
          <p>Ascii Fishy Fam is a collection of unique NFTs transformed into ASCII art. ASCII art is a digital art form as old as the internet, pieced together from a set of 128 characters defined by the ASCII standard in 1963. Our ASCII Fishy Fam are fully crafted using text—zoom in to see the details!</p>
          
          <h1>Social Media</h1>
          <div className="services">
            <div className="content content-1">
              <div className="fab fa-opensea"></div>
              <h2>OpenSea</h2>
              <p>Explore and purchase from our growing collection of Ascii Fishy Fam NFTs.</p>
              <a href="https://opensea.io/collection/the-ascii-fishies-fam" aria-label="Buy on OpenSea">BUY</a>
            </div>
            
            <div className="content content-2">
              <div className="fab fa-twitter"></div>
              <h2>Twitter</h2>
              <p>Follow us for the latest news and giveaways!</p>
              <a href="https://twitter.com/AsciiFishyFam" aria-label="Follow on Twitter">FOLLOW</a>
            </div>
            
            <div className="content content-3">
              <div className="fab fa-tiktok"></div>
              <h2>TikTok</h2>
              <p>Check out early releases on TikTok!</p>
              <a href="https://www.tiktok.com/@asciifishyfam" aria-label="See more on TikTok">READ MORE</a>
            </div>
            
            <div className="content content-4">
              <div className="fab fa-telegram"></div>
              <h2>Telegram</h2>
              <p>Join our Telegram to engage directly with the community!</p>
              <a href="https://t.me/AsciiFishyFamNFT" aria-label="Join on Telegram">JOIN</a>
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
