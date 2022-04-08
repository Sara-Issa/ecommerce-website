import React from 'react'

function Section2() {
  return (
    <div>
        <h2 className='text-center m-auto py-10 font-serif font-bold text-2xl'>Category</h2>
        <div className='grid grid-cols-none md:grid-cols-2 xl:grid-cols-2 w-4/5 m-auto h-900 w-600'>
            <div className='text-white bg-blue-color1 text-center align-middle font-bold text-xl font-serif m-1 p-12'>Sports</div>
            <div className='text-white bg-gray-color3 text-center align-middle font-bold text-xl font-serif m-1 p-12'>Fashion</div>
            <div className='text-white bg-gray-color3 text-center align-middle font-bold text-xl font-serif m-1 p-12'>Art</div>
            <div className='text-white bg-blue-color1 text-center align-middle font-bold text-xl font-serif m-1 p-12'>Decorations</div>
        </div>
    </div>
  )
}

export default Section2