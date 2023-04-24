import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs';
import {BsCartCheck} from 'react-icons/bs';
import Annoucement from '../components/Annoucement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';


const Home = () => {
  return (
   <div>
    <Annoucement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <Newsletter />
   <Footer />
    
   </div>
  )
}

export default Home