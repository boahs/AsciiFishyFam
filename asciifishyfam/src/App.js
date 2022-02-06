import './App.css';
import React from "react";
import banner from './bannerAsciiTransparent.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';



// import BasicHooksExample  from './switchOption'

function App() {

  library.add(fab, faCheckSquare, faCoffee);

  
  
  return (
    <div className="App">
      <header className="App-header">
        {/* {BasicHooksExample} */}
        <h2>Ascii Fishy Fam</h2>
        
        <img src={banner} alt="ascii banner" width="70%" height="auto"/>
        <div className = "box">
        <h5>FISHY NEWS</h5>
        <h3>SALE IS LIVE! SEE SOCIAL MEDIA SECTION BELOW!</h3>
        <h6>ROADMAP BEING INTRODUCED THIS MONTH!</h6>
        <h6>WEBSITE IMPROVEMENTS!</h6>
        <h6>WALLET API INTERGRATION WITH WEBSITE!</h6>
        <h6>OPENSEA API INTERGRATION WITH WEBSITE!</h6>
        <h6>COMMUNITY POLLING OPTION!</h6>
        </div>
        <p> Ascii Fishy Fam is a collection of unique NFTs turned into ASCII art. What is ascii art? It's a style of art as old as the internet(literally) - It's a design technique that uses computers for presentation and consists of pictures pieced together from a total of 128 characters defined by the ASCII standard from 1963. Our Ascii Fishy Fam are entirely created using text! Don't believe me? Zoom into one! </p>
        

        <div class="cards">
      <h1>
 Social Media</h1>
<div class="services">
    <div class="content content-1">
        <div class="fab fa-whatsapp"></div>
<h2>
OpenSea</h2>
<p>
Offer or buy from our expanding collection of Ascii Fishy Fam!</p>
<a href="https://opensea.io/collection/the-ascii-fishies-fam">BUY</a>
        </div>
<div class="content content-2">
          <div class="fab fa-whatsapp">
</div>
<h2>
Twitter</h2>
<p>
Follow us on twitter to quickly find news and giveaways!</p>
<a href="https://twitter.com/AsciiFishyFam">FOLLOW</a>
        </div>
<div class="content content-3">
          <div class="fab fa-whatsapp">
</div>
<h2>
TikTok</h2>
<p>
Follow us on TikTok to see Ascii Fishy Fam early releases!</p>
<a href="https://www.tiktok.com/@asciifishyfam">Read More</a>
        </div>
</div>
</div>
        
<section class="sticky">
  <div class="bubbles">
      <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    
  </div>
</section>
      </header>
    </div>
  );
}

export default App;
