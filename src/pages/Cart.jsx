import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Mobile } from "../Responsive";
const Container = styled.div`

`
const Wrapper = styled.div`
padding:20px;
${Mobile({padding:'10px'})}
`
const Title = styled.h1`
font-weight: 300;
text-align:center;
`
const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding:10px;
font-weight:600;
cursor:pointer;
border:${props => props.type === 'filled' && 'none'};
background:${props => props.type === 'filled' ? 'black' :'transparent'};
color:${props => props.type === 'filled' && 'white'};
${Mobile({marginLeft:'20px',height:'45px'})}
`
const Bottom = styled.div`
display:flex;
justify-content:space-between;
${Mobile({flexDirection:'column'})}
`
const Info = styled.div`
flex:3;
`
const Summary = styled.div`
flex:1;
border:1px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
`
const TopTexts = styled.div`
${Mobile({display:'none'})}
`
const TopText = styled.span`
text-decoration:underline;
cursor:pointer;
margin: 0 10px;
`
const Product = styled.div`
display:flex;
justify-content:space-between;
`
const ProductDetail = styled.div`
flex:2;
display:flex;
`
const Image = styled.img`
width:300px;
height:300px;
border-radius:50%;
${Mobile({width:'200px',height:'200px'})}
`
const Details = styled.div`
padding:20px;

display:flex;
flex-direction:column;
justify-content:space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background:${props =>props.color}

`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProductAmountContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap:1rem;
margin-bottom:20px;

`
const ProductAmount = styled.div`
font-size:24px;
margin:5px;
`
const Hr = styled.hr`
background:#eee;
border:none;
height:1px;
`
const ProductPrice = styled.div`
font-size:30px;
font-weight:200;
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
const SummaryTitle = styled.h1`
font-weight:200;
`
const SummaryItem = styled.div`
margin:30px 0;
display:flex;
justify-content:space-between;
font-weight: ${props =>props.type === 'total' && '500'};
font-size: ${props =>props.type === 'total' && '24px'};

`
const SummaryItemText = styled.span`
font-size:1.2rem;

`
const SummaryItemPrice = styled.span`

`
const Button= styled.button`
width:100%;
padding:10px;
background:black;
color:white;
font-weight:600;

`


const Cart = () => {
  return (
   <Container id="cart">
   <Annoucement />
   
   <Wrapper>
<Title>YOUR BAG</Title>
<Top>
    <TopButton>CONTINUE SHOPPING</TopButton>
    <TopTexts>
        <TopText>Shopping Bag(2) </TopText>
        <TopText>Your Wishlist(0) </TopText>
    </TopTexts>
    <TopButton type='filled'>CHECKOUT NOW</TopButton>
</Top>
<Bottom>

    <Info>

<Product>
    <ProductDetail>
<Image src='https://media.istockphoto.com/photos/creative-minimal-paper-idea-concept-white-shoe-with-white-background-picture-id1149654373?b=1&k=20&m=1149654373&s=170667a&w=0&h=B6JPkVf7-0Fty3R05byj4RbXX1c07x_zg2O-OHN7Ovo=' />
<Details>
<ProductName><b>Product:</b> JESSIE THUNDER SHOES </ProductName>
<ProductId><b>ID:</b> 89080980987 </ProductId>
<ProductColor  color='black'/>
<ProductSize><b>SIZE:</b> 37.5 </ProductSize>


</Details>
    </ProductDetail>






    <PriceDetail>
     <ProductAmountContainer>
        <Remove>-</Remove>
        <ProductAmount>2</ProductAmount>
        <Add>+</Add>
     </ProductAmountContainer>
     <ProductPrice> $30</ProductPrice>





    </PriceDetail>



</Product>
<Hr />
<Product>
    <ProductDetail>
<Image src='https://media.istockphoto.com/photos/plain-red-tee-shirt-isolated-on-white-background-picture-id471188329?k=20&m=471188329&s=170667a&w=0&h=SAT6RFEpRKdLqTH9dqmXr-OEeDPLl4i1gmQZLupm-ro=' />
<Details>
<ProductName><b>Product:</b> MILLER SHIRT </ProductName>
<ProductId><b>ID:</b> 2322132 </ProductId>
<ProductColor  color='red'/>
<ProductSize><b>SIZE:</b> M </ProductSize>


</Details>
    </ProductDetail>






    <PriceDetail>
     <ProductAmountContainer>
        <Remove>-</Remove>
        <ProductAmount>2</ProductAmount>
        <Add>+</Add>
     </ProductAmountContainer>
     <ProductPrice> $20</ProductPrice>





    </PriceDetail>



</Product>


    </Info>
    <Summary>
        <SummaryTitle> ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
            <SummaryItemText>
                Subtotal
            </SummaryItemText>
            <SummaryItemPrice>$80</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>
                Estimated Shipping
            </SummaryItemText>
            <SummaryItemPrice>$5.99</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>
                Shipping Discount
            </SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
            <SummaryItemText>
                Total
            </SummaryItemText>
            <SummaryItemPrice type='total'>$120</SummaryItemPrice>
        </SummaryItem>
        <Button>
            CHECKOUT NOW 

            </Button>

    </Summary>
</Bottom>


   </Wrapper>





   <Footer />
   



   </Container>
  )
}

export default Cart