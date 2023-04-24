import styled from "styled-components"
import {BsArrowLeftCircleFill} from 'react-icons/bs'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import { useState } from "react";
import {sliderItems} from '../data';

import { Mobile } from "../Responsive";

const Container = styled.div`
width:100%;
height:100vh;
display:flex;

margin:1rem 0;
position:relative;
overflow:hidden; 
${Mobile({display:'none'})};
`

const Arrow = styled.div`
width:100px;
height:100px;
background:transparent;
font-size:1.5rem;
color:black;
border-radius:50%;
margin:2rem;
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
position:absolute;
top:0;
bottom:0;
left:${props => props.direction==='left' && '10px'};
right:${props => props.direction==='right' && '10px'};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper = styled.div`
height:100%;

display:flex;
transform:translateX(${props=>props.slideIndex * -100}vw);
transition: all 1.5s ease;



`
const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
jusify-content:space-between;

background:#${props => props.bg};

`
const ImgContainer = styled.div`
height:100%;

flex:1;


`
const InfoContainer = styled.div`
flex:1;
padding:50px;


`
const Title = styled.h1`
font-size:70px;
width:max-content;
`
const Desc = styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button = styled.button`
padding:10px;
font-size:20px;
background:transparent;
cursor:pointer;
`
const Image = styled.img`

height:80%;

object-fit:cover;




`


const Slider = () => {

   const [slideIndex,setSlideIndex] =useState(0);
   console.log(slideIndex);

   const handleClick = (direction) =>{
if(direction ==='left') {
   setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2);
}
else {
   setSlideIndex(slideIndex <2 ? slideIndex +1 : 0)
}
   }
  return (
   <Container>

<Arrow direction='left' onClick={() => handleClick('left')}>
<BsArrowLeftCircleFill /> </Arrow>
<Wrapper slideIndex={slideIndex}>
   {sliderItems.map(item => {

    return (<Slide bg={item.bg}>

     <ImgContainer>
     <Image src={item.img} />
        
    
     </ImgContainer>
     <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        <Button>SHOW NOW</Button>
     </InfoContainer>
    </Slide>
)})}
   
</Wrapper>
<Arrow direction='right' onClick={() => handleClick('right')}>
<BsArrowRightCircleFill />

</Arrow>

   </Container>
  )
}

export default Slider