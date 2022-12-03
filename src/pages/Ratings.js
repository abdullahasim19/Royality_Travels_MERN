import React from 'react'
import StarRating from '../components/FormElements/StarRating'

const Ratings = () => {
    const getRating=(rating)=>{
        console.log(rating)
    }
  return (
    <div className='text-center bg-dark'>
      <StarRating getRating={getRating}/>
    </div>
  )
}

export default Ratings
