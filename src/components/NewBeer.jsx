import React from 'react'
import newBeer from '../assets/new-beer.png';

function NewBeer() {
  return (
    <div className="cardDivs">
      <img className="cardPics" src={newBeer} alt="beer glass and beer bottle" />
      <a href="/new-beer">Insert New Beer</a>
      <p>Here you can add a new beer in the unlikely event Ironbeers hasn't that one already. Probably is homebrewed...</p>
    </div>
  )
}

export default NewBeer
