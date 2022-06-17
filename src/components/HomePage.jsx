import React from 'react'
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='homePage'>
      <h1 className='appTitle'>Ironbeers React Style</h1>
      <div className='cardDivs'>
        <img className="cardPics" src={beers} alt="several beer brands" />
        <Link to="/beers">All Beers</Link>
        <p>Check all the beers Ironhack has compiled for you. This is truly public service!</p>
      </div>
      <div className='cardDivs'>
        <img className="cardPics" src={newBeer} alt="bottle and glass of beer" />
        <Link to="/new-beer">Insert New Beer</Link>
        <p>Here you can add a new beer in the unlikely event Ironbeers hasn't that one already. Probably is homebrewed...</p>
      </div>
      <div className='cardDivs'>
      <img className="cardPics" src={randomBeer} alt="beer glass and beer bottle" />
      <Link to="/random-beer">Pick a Random</Link>
      <p>Don't know what to choose? Let us do that for you. Press here and enjoy your beer!</p>
      </div>
    </div>
  )
}

export default HomePage