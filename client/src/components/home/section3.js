import React from 'react'

function Section3() {
  return (
    <div className='w-4/5 m-auto py-16'>
         <h2 className='text-center m-auto py-10 font-serif font-bold text-2xl'>products</h2>
        <div className='grid grid-cols-none md:grid-cols-2 xl:grid-cols-4'>
            {/* this section supposeto be like floating photo automatically */}
        <img src="./ee.jpg" alt='product' className='px-4 h-300 w-300'/>
        <img src="./ee.jpg" alt='product' className='px-4 h-300 w-300'/>
        <img src="./ee.jpg" alt='product' className='px-4 h-300 w-300'/>
        <img src="./ee.jpg" alt='product' className='px-4 h-300 w-300'/>
        </div>
        {/* arrow icon for see more */}
        <div></div>
    </div>
  )
}

export default Section3