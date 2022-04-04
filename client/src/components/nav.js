import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
        <div>
            <h1>Devzoid</h1>
        </div>
        <div>
            <ul>
            <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/login">
                <li><button>sign in</button></li>
                </Link>
                {/* heart incon for wish list */}
                <Link to="/wishlist">
                <li></li>
                </Link>
                {/* cart icon */}
                <Link to="/cart">
                <li></li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav