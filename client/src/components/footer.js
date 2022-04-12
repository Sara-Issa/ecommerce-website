import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="flex justify-around my-20 py-20 bg-blue-color1 text-white">
        <div>
            <h1>DevZoid</h1>
            <h3>Address : xxxxx xxxxx xxxxx</h3>
        </div>
        <div>
            <ul>
            <Link to="/privecy">
                <li>privecy policy</li>
                </Link>
                <Link to="/terms">
                <li>terms&conditions</li>
                </Link>
                <Link to="/about">
                <li>about</li>
                </Link>
            </ul>
        </div>
        <div>
            <ul>
                <li>instegram</li>
                <li>twitter</li>
                <li>facebook</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer