import React from 'react'
import styled from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { Mobile } from '../Responsive';
const Container = styled.div`
`
const Wrapper = styled.div`
padding:50px;
display:flex;
${Mobile({padding:'10px', marginTop:'5rem',
flexDirection:'column'})}

`
const ImgContainer = styled.div`
flex:1;
`
const Image = styled.img`
width:100%;
height:max-content;

object-fit:cover;

`
const InfoContainer = styled.div`
flex:1;
padding: 0 50px;
${Mobile({padding:'10px'})}
`
const Title = styled.h1`
 font-weight:200;
`
const Desc = styled.p`
margin: 20px 0;
color:lightblue;
letter-spacing:2px;
font-weight: 600;


`
const Price = styled.span`
font-weight:200;
font-size:40px;

`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
 ${Mobile({width:'100%', flexDirection:'column'})}
`
const Filter = styled.div`
margin:20px;
display:flex;
gap : 10px;

`
const Circle = styled.div`
background:${props=> props.color};
width:20px;
height:20px;
border-radius:50%;
margin:5px;


`
const Select = styled.select`


border:transparent;
color:white;;
background:lightblue;
font-size:1rem;
padding:10px;

font-weight: 600;
letter-spacing:0.1rem;
border-radius:2px;



`
const Option = styled.option`

color:white;;
font-size:1rem;
margin-bottom:10px;
padding:10px;
border:1px solid red;
font-weight: 600;
letter-spacing:0.1rem;



`

const FilterText = styled.div`
font-size:20px;
font-weight:600;

`
const AddContainer = styled.div`

display:flex;
width:100%;
align-items:center;
justify-content:space-between;
margin-top:2rem;

`
const AmountContainer = styled.div`

display:flex;
align-items:center;
font-weight:600;

`
const Amount = styled.span`
width:30px;
height:30px;
border-radius:10px;
border:1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0 5px;
font-size:19px;

`
const Button = styled.button`

background:transparent;
border:2px solid teal;
color:black;
padding:10px;
font-size:1.1rem;
cursor:pointer;
transition: all 0.5s ease;
&:hover{
  background:lightblue;
  color:white;
  border:2px solid lightblue;
transform:scale(1.1);

}

`
const Remove = styled.button`

cursor:pointer;


background:transparent;
border:none;
color:lightblue;
padding:10px;
font-size:3rem;
transition: all 0.5s ease;
&:hover{
  
  transform:scale(1.3);
}
`
const Add = styled.button`
background:transparent;
border:none;
color:lightblue;
padding:10px;
font-size:2.7rem;
margin:0 1rem;
cursor:pointer;
transition: all 0.5s ease;


&:hover{

  transform:scale(1.3);
}
`
const Product = () => {
  return (
    <Container>
       
       <Annoucement />
       <Navbar />
       <Wrapper>
 <ImgContainer>
 <Image src='https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png' />

 </ImgContainer>
 <InfoContainer>
  <Title> Denium Jumpsuit</Title>
  <Desc>
    Lorem ipsum dolor sit amet c
    onsectetur adipisicing elit. Aperiam
     qui accusamus, a
    tque ab quo iure quam magni! T
    enetur veritatis exercitationem quaerat 
    consequuntur repellat saepe excepturi
     vero ut sed natus. Praesentium.
  </Desc>
  <Price>$20</Price>
  <FilterContainer>
        <Filter >
<FilterText >Colors:</FilterText>

      <Circle color='red'/>
      <Circle color='lightblue'/>
      <Circle color='black'/>

        </Filter>
        <Filter >

<FilterText >Size:</FilterText>
<Select>

<Option disabled selected> Size</Option>
<Option> S</Option>
<Option> M</Option>
<Option> L</Option>
<Option> XL</Option>
<Option> XLL</Option>





</Select>
        </Filter>
     </FilterContainer>
     <AddContainer>
      
      <AmountContainer>
        <Remove> - </Remove>
        <Amount> 1</Amount>
        <Add> + </Add>

      </AmountContainer>
      <Button> Add to Cart</Button>
     </AddContainer>
 </InfoContainer>


       </Wrapper>
       <Newsletter />
       <Footer />

  </Container>
  )
}

export default Product