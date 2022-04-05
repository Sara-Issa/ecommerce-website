import React from 'react'

function Signup() {
  return (
    <div>
        <div><h2>Sign Up</h2></div>
        <div>
            <input type="text" placeholder='email'/>
        </div>
        <div>
            <input type="password" placeholder='password'/>
        </div>
        <div>
            <input type="password" placeholder='repeat password'/>
        </div>
        <div>
        <button>Signup</button>
        </div>
    </div>
  )
}

export default Signup