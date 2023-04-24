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
flex-direction:column;
flex-wrap: wrap;
gap:2rem;
`

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0 0;
padding:10px;
font-size:1.1rem;

`
const Link = styled.h4`
display:block;
color:lightblue;
font-size:17px;
margin:20px 0;
cursor:pointer;

`

const  Login = () => {
  return (
    <Container>
        <Wrapper >
            <Title> SIGN IN</Title>
            <Form>
                <Input placeholder='username' />
                
                <Input placeholder='password' />
                
            
                <Button>LOGIN </Button>
            </Form>
                <Link>Dont remember my password</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
        </Wrapper>
    </Container>
  )
}

export default Login 