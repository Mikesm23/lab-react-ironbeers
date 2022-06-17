import React from 'react'
import randomBeer from '../assets/random-beer.png';

function RandomBeer() {
  return (
    <div className="cardDivs">
      <img className="cardPics" src={randomBeer} alt="beer glass and beer bottle" />
      <a href="/random-beer">Select Random Beer</a>
      <p>Don't know what to choose? Let us do that for you. Press here and enjoy your beer!</p>
    </div>
  )
}

export default RandomBeer