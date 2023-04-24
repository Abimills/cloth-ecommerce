import {MdSend} from 'react-icons/md';
import styled from 'styled-components';
import { Mobile } from '../Responsive';
const Container = styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Title = styled.h1`
font-size:70px;
margin-bottom:20px;
${Mobile({fontSize:'60px'})}
`
const Description = styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${Mobile({textAlign:'center'})}
`
const InputContainer = styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
${Mobile({width:'70%'})}

`
const Input = styled.input`
border:none;
padding-left:20px;
flex:8;

`
const Button = styled.button`
flex:1.2;
border:none;
background-color:teal;
color:white;

`
const Newsletter = () => {
  return (
   <Container>

    <Title>
Newsletter
    </Title>
    <Description>
    Get timely updates from your favourite products
    </Description>
    <InputContainer>
    <Input placeholder='Your email'/>
    <Button>
        <MdSend />
    </Button>
    
    </InputContainer>
   </Container>
  )
}

export default Newsletter