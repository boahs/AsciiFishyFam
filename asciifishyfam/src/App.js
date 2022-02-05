import './App.css';
import React from "react";
import banner from './bannerAsciiTransparent.png';
// import BasicHooksExample  from './switchOption'

function App() {

  
  
  return (
    <div className="App">
      <header className="App-header">
        {/* {BasicHooksExample} */}
        <h2>Ascii Fishy Fam</h2>
        
        <img src={banner} alt="ascii banner" width="70%" height="auto"/>
        <div className = "box">
        <h5>FISHY NEWS</h5>
        <a
          className="App-link"
          href="https://opensea.io/collection/the-ascii-fishies-fam"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>SALE IS LIVE! CLICK HERE!</h3>
        </a>
        <h6>ROADMAP BEING INTRODUCED THIS MONTH!</h6>
        <h6>WEBSITE OVERHAUL BEING INTRODUCED</h6>
        <h6>COMMUNITY POLLING OPTION POSSIBILITY</h6>
        </div>
        <p>Astcii Fishy Fam is a collection of unique NFTs turned into ASCII art. What is ascii art? It's a style of art as old as the internet(literally) - It's a design technique that uses computers for presentation and consists of pictures pieced together from a total of 128 characters defined by the ASCII standard from 1963. Our Ascii Fishy Fam are entirely created using text! Don't believe me? Zoom into one! </p>

        <a 
        className='="App-link'
        href="https://twitter.com/AsciiFishyFam"
        target="_blank"
        rel="noopener noreferrer"
        >
          Follow
        </a>
        
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
