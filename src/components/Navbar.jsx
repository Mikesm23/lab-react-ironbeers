import React from 'react'
import { NavLink } from 'react-router-dom'
// import { Button } from '@mantine/core';

function Navbar() {
  return (
    <div className='navBarDiv'>
        {/*<Button href="/beers" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>All Beers</Button> */}

        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : "unselected"}>
          Home
        </NavLink>
        <NavLink to="/beers" className={({ isActive }) => isActive ? "selected" : "unselected"}>
        All Beers
        </NavLink>
        <NavLink to="/random-beer" className={({ isActive }) => isActive ? "selected" : "unselected"}>
        Random Beer
        </NavLink>
        <NavLink to="/new-beer" className={({ isActive }) => isActive ? "selected" : "unselected"}>
        New Beer
        </NavLink>
    </div>
  )
}

export default Navbar
