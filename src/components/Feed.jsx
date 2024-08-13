import React from 'react'
import Feed2 from '../assets/feed2.png'
import Feed1 from '../assets/feed1.png'
import Feed3 from '../assets/feed3.png'

const Feed = () => {
  return (
    <div className='flex px-9 gap-4 mt-6  justify-center '>
      <div>
        <img className='' src={ Feed2} alt="" />
      </div>
      <div className='flex flex-col gap-4'>
        <img className='' src={Feed3} alt="" />
        <img className='' src={Feed1} alt="" />
      </div>
    </div>
  )
}

export default Feed