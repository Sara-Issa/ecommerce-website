import React from 'react'

function Section4() {
  return (
    <div>
      <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between  w-4/5 m-auto py-20">
            <div className="w-full px-2 sm:w-1/3 h-20 rounded-t sm:rounded-l sm:rounded-t-none shadow">
            <img src='./ee.jpg' alt='img' className="h-20 m-auto w-20 rounded-full"/>
        <h4 className="font-serif font-semibold text-center text-lg py-5">name</h4>
        <h6 className="text-center font-sans font-medium">the person's testimonial about the website, and they think about it in general.</h6>
            </div>
            <div className="w-full px-2 sm:w-1/3 h-20 shadow ">
            <img src='./ee.jpg' alt='img' className="h-20 m-auto w-20 rounded-full"/>
        <h4 className="font-serif font-semibold text-center text-lg py-5">name</h4>
        <h6 className="text-center font-sans font-medium">the person's testimonial about the website, and they think about it in general.</h6>
            </div>
            <div className="w-full px-2 sm:w-1/3 h-20 rounded-b sm:rounded-b-none shadow ">
            <img src='./ee.jpg' alt='img' className="h-20 m-auto w-20 rounded-full"/>
        <h4 className="font-serif font-semibold text-center text-lg py-5">name</h4>
        <h6 className="text-center font-sans font-medium">the person's testimonial about the website, and they think about it in general.</h6>
            </div>
        </div>
    </div> 
  )
}

export default Section4