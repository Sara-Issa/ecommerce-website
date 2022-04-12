import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="m-20 drop-shadow-xl">
    <div className="m-auto text-center p-10 items-center rounded-2xl h-80 w-2/6 bg-gray-200">
        <div className="py-3">
            <h2 className="font-extrabold font-sans text-xl text-blue-color1">Login</h2>
        </div>
        <div className="py-3">
            <input type="text" placeholder="email" className="rounded-xl w-80 h-10 text-gray-600"></input>
        </div>
        <div className="py-3">
            <input type="password" placeholder="password" className="rounded-xl w-80 h-10 text-gray-600"></input>
        </div>
        <div className="py-3">
          <button className="mx-2 my-2 bg-gray-200 transition duration-150 ease-in-out hover:bg-blue-color1 font-semibold hover:text-white rounded-lg border border-blue-color1 text-blue-color1 px-8 py-2 text-xs">Login</button>
          <Link to="/signup">
            <p className="font-mono font-thin text-xs text-gray-800">Don't have an account, sign up Now.</p>  
          </Link>        
        </div>
        
    </div>
    </div>
  )
}

export default Login