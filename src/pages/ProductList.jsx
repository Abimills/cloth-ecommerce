import React from 'react'
import styled from 'styled-components';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import { Mobile } from '../Responsive';
const Container = styled.div`
display:flex;
flex-direction:column;




`
const Title = styled.h1`
margin:20px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;
`
const Filter = styled.div`
margin:20px;
display:flex;
gap : 10px;
${Mobile({flexDirection:'column'})}

`
const FilterText = styled.div`
font-size:20px;
font-weight:600;

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
${Mobile({fontSize:'10px'})}


`
const Option = styled.option`

color:white;;
font-size:1rem;
margin-bottom:10px;


font-weight: 600;

${Mobile({fontSize:'10px'})}


`
const ProductList = () => {
  return (
   <Container>

     <Annoucement />
    <Navbar />
     <Title>Dresses</Title>
     <FilterContainer>
        <Filter >
<FilterText >Filter Products:</FilterText>
<Select>

<Option disabled selected> Color</Option>
<Option> White</Option>
<Option> Black</Option>
<Option> Red</Option>
<Option> Blue</Option>
<Option> Yellow</Option>
<Option> Green</Option>



</Select>
<Select>

<Option disabled selected> Size</Option>
<Option> S</Option>
<Option> M</Option>
<Option> L</Option>
<Option> XL</Option>
<Option> XLL</Option>




</Select>
        </Filter>
        <Filter >

<FilterText >Sort Products:</FilterText>
<Select>

<Option  selected> Newest</Option>
<Option> Price (asc) </Option>
<Option> Price (desc) </Option>





</Select>
        </Filter>
     </FilterContainer>
     <Products />
     <Newsletter />
     <Footer />
   </Container>
  )
}

export default ProductList