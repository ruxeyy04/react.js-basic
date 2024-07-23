import React from 'react'
import Header from './Header'
function Body({slot}) {
  return (
    <div className="bg-gray-300 h-screen w-full">
        <Header/>
      {slot}
    </div>
  )
}

export default Body
