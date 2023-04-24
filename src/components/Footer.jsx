import React from 'react'
import styled from 'styled-components'
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import {BsFillTelephoneInboundFill} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import { Mobile } from '../Responsive'

const Container = styled.div`
display:flex;
align-items:center;
${Mobile({flexDirection:'column'})}
`
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`
const Center = styled.div`
flex:1;
padding:20px;
${Mobile({display:'none'})}
`
const Right = styled.div`
flex:1;
padding:20px;
${Mobile({marginLeft:'10%',background:'lightblue', width:'100%'})}

`
const Title = styled.h3`
margin-bottom:30px;
`
    

const List = styled.ul`
marign:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`


const ListItem = styled.li`
width:50%;
margin-bottom:10px;
cursor:pointer;
color:lightblue;
font-size:1.05rem;
`




const Logo = styled.h1`

`
const Desc = styled.p`
marign:20px 0px;
max-width:500px;
`
const SocialContainer = styled.div`
display:flex;
gap:10px;
`
const SocialIcon = styled.div`
width:30px;
height:30px;
background:rgba(244,0,0,0.1);
border-radius:50%;
padding:10px;
cursor:pointer;
display:flex;
align-items:center;
justify-content:center;
font-size:1.7rem;


`
const ContactItem = styled.div`
margin-bottom:20px;
display:flex;
align-items:center;
gap:5px;

`
const Payment = styled.img`
width:50%;

`



const Footer = () => {
  return (
   <Container>
<Left>
    <Logo>LAMA.</Logo>
    <Desc>
        Lorem ipsum dolor sit
         amet consectetur, adipisicing elit.
          Quam minima debitis dolores nulla voluptatem q
        uos fugiat quia expedita est nesciunt!
    </Desc>
    <SocialContainer>
        <SocialIcon>
            <BsFacebook />
        </SocialIcon>
        <SocialIcon>
            <AiFillInstagram />
        </SocialIcon>
        <SocialIcon>
            <AiFillTwitterCircle />
        </SocialIcon>
        <SocialIcon>
            <FaPinterest  />
        </SocialIcon>
    </SocialContainer>
</Left>
<Center>
    <Title> Useful Links</Title>
    <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Women Fashion</ListItem>
        <ListItem>Accesories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms Tracking</ListItem>
    </List>
</Center>
<Right>

<Title>Contact</Title>
<ContactItem><ImLocation />622 zurich avenue 032-032</ContactItem>
<ContactItem> <BsFillTelephoneInboundFill />+123 43 43</ContactItem>
<ContactItem><FiMail />contact@lama.dev</ContactItem>
<Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />

</Right>
   </Container>
  )
}

export default Footer