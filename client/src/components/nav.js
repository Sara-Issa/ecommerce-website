import React from 'react'
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div className="flex m-auto justify-between w-11/12">
        <div>
            <h1 className="text-3xl font-serif text-yellow-color2 font-extrabold">Devzoid</h1>
        </div>
        <div>
            <ul className="flex flex-auto">
            <Link to="/">
                <li className="font-serif font-semibold text-lg text-blue-color1 px-4">Home</li>
                </Link>
                <Link to="/login">
                <li className="font-serif font-semibold text-lg text-blue-color1 px-4"><button>sign in</button></li>
                </Link>
                {/* heart incon for wish list */}
                <Link to="/wishlist">
                <li className="font-serif font-semibold text-lg text-blue-color1 px-4"></li>
                </Link>
                {/* cart icon */}
                <Link to="/cart">
                <li className="font-serif font-semibold text-lg text-blue-color1 px-4"></li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Nav