import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height:30px;
background:teal;
color:white;
text-align:center;
font-size:1.2rem;
font-weight:500;
letter-spacing:0.2rem;
`

const Annoucement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over $50
    </Container>
  )
}

export default Annoucement