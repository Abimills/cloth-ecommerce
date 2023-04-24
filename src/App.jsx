import React from 'react'
import './index.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import styled from 'styled-components'
import { Mobile } from './Responsive'
const Container = styled.div`

${Mobile({overflow:'hidden'})}
`
const App = () => {
  return (
<Container>

  <Home />
</Container>
  
  )
}

export default App 