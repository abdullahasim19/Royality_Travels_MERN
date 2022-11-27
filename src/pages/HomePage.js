import React from 'react'
import Slideshow from '../components/HomePage/Slideshow'
import Info from '../components/HomePage/Info'
import TopPlacesList from '../components/HomePage/TopPlacesList'
import {useSelector}  from 'react-redux';
const HomePage = () => {
  const c=useSelector((state=>state))
  console.log(c)
  return (
    <React.Fragment>
      <Slideshow/>
      <Info/>
      <TopPlacesList/>
    </React.Fragment>
  )
}

export default HomePage
