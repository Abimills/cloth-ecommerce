import React from 'react';
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs';
import {BsCartCheck} from 'react-icons/bs';
import { Mobile } from '../Responsive';

const Container = styled.div`
height:60px;
${Mobile({height:'50px'})};

`
const Wrapper = styled.div`
padding:10px 20px;
display:flex;
justify-content: space-between;
text-align:center;
align-items:center;
${Mobile({padding:'10px 0px '})};
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Center = styled.div`
flex:1;
text-align:center;
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;

${Mobile({justifyContent:'center', flex:2})};
`
const Language = styled.span`
font-size:14px;
cursor:pointer;
${Mobile({display:'none'})};

`
const Input = styled.input`
border:none;
outline:none;
${Mobile({width:'50px'})};
`
const Logo = styled.h1`
font-weight:bold;
${Mobile({fontSize:'24px'})};

`
const Num = styled.h1`
background: #315399;
color:white;
border-radius:50%;
width:20px;
height:20px;
font-size:12px;
position:relative;
top:1rem;
left:0.7rem;
text-align:center;
display:flex;
justify-content:center;
align-items:center;


`
const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
font-size:1.2rem;
text-align:center;
${Mobile({fontSize:'12px', marginLeft:'10px'})};
`
const SearchContainer = styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`


const Navbar = () => {
  return (
   <Container>
      <Wrapper>
<Left> <Language> EN</Language>
<SearchContainer> 
 <Input placeholder='search'/>
<BsSearch style={{color:'gray',fontSize:'15px'}}/>
</SearchContainer>
</Left>
<Center><Logo>LAMA.</Logo></Center>
<Right>
  <MenuItem><a href='#cart' >REGISTER</a></MenuItem> 
  <MenuItem>SIGNIN</MenuItem> 
  <MenuItem>  <Num>4</Num><BsCartCheck style={{marginBottom:'1.3rem',fontSize:'1.4rem'}} /></MenuItem> 
  </Right>
    

      </Wrapper>

    </Container>
  )
}

export default Navbar