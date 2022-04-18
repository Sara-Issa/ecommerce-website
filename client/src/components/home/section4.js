import React from 'react'

function Section4() {
  return (
    <div>
      <div className="flex flex-wrap sm:flex-no-wrap items-center justify-between  w-4/5 m-auto py-20">
            <div className="w-full py-10 px-5 sm:w-1/3 h-80 items-center rounded-t sm:rounded-l sm:rounded-t-none shadow-xl bg-gray-200">
            <img src='./ee.svg' alt='img' className="h-20 m-auto w-20 rounded-full "/>
        <h4 className="font-serif font-semibold text-center text-lg py-5">name</h4>
        <h6 className="text-center font-sans font-medium">the person's testimonial about the website, and they think about it in general.</h6>
            </div>
            <div className="w-full py-10 px-5 sm:w-1/3 h-80 items-center shadow-xl bg-gray-200 ">
            <img src='./ee.svg' alt='img' className="h-20 m-auto w-20 rounded-full "/>
        <h4 className="font-serif font-semibold text-center text-lg py-5">name</h4>
        <h6 className="text-center font-sans font-medium">the person's testimonial about the website, and they think about it in general.</h6>
            </div>
            <div className="w-full py-10 px-5 sm:w-1/3 h-80 items-center rounded-b sm:rounded-b-none shadow-xl bg-gray-200">
            <img src='./ee.svg' alt='img' className="h-20 m-auto w-20 rounded-full "/>
        <h4 className="font-serif font-semibold text-center text-lg py-5">name</h4>
        <h6 className="text-center font-sans font-medium">the person's testimonial about the website, and they think about it in general.</h6>
            </div>
        </div>
    </div> 
  )
}

export default Section4