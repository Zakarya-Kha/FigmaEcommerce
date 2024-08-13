import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Feed from '../components/Feed'
import Category from '../components/Category'
import Arrival from '../components/Arrival'
import Saller from '../components/Saller'
import Products from '../components/Products'
import FeedButtom from '../components/FeedButtom'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Feed/>
      <Category/>
      <Arrival/>
      <Saller/>
      <Products/>
      <FeedButtom/>
      <Footer/>
    </div>
  )
}

export default Home