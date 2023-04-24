import styled from "styled-components";
import { Mobile } from "../Responsive";

const Container = styled.div`
width:100vw;
height:100vh;
background:lightblue;


// url('https://thumbs.dreamstime.com/b/confident-business-woman-looking-camera-standing-street-hands-crossed-95903800.jpg');
background-repeat:none;
display:flex;
align-items:center;
justify-content:center;
`
const Wrapper = styled.div`
width:50%;
padding:20px;
background-color:white;
border-radius:3px;
${Mobile({width:'80%'})}

`
const Title = styled.h1`
font-size:24px;
font-weight:300;
`
const Button = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
color:white;
cursor:pointer;
font-size:1.1rem;
transition: all 0.5s ease;

&:hover{
    background:white;
    border:2px solid teal;
    color:black;
}

`

const Form = styled.form`
display:flex;
flex-wrap: wrap;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;
font-size:1.1rem;
`
const Agreement = styled.span`
font-size:17px;
margin:20px 0;

`

const  Register = () => {
  return (
    <Container>
        <Wrapper >
            <Title> Create An Account</Title>
            <Form>
                <Input placeholder='name' />
                <Input placeholder='last name' />
                <Input placeholder='username' />
                <Input placeholder='email' />
                <Input placeholder='password' />
                <Input placeholder='confirm password' />
                <Agreement>
                    By creating an account, I consent to the yar jfsdafj;j  jf kdjfkdsjfoiwe j ldsjf kl jl jk 
                    data in accrodat lfkdsjalfdakj <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>CREATE </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register 