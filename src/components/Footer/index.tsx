import React from 'react';
import SingFooter from '../SingFooter/index'
import { AnchorLink, Parent, List, FooterStyle } from './style';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Container } from '@mui/system';


 const Footer: React.FC= () => {
  return (
    <>
    <Container>
      <SingFooter/>
    <FooterStyle>       
        <Parent>
         <h1>CUSTOMER SERVICE</h1>
        <List>
            <AnchorLink to=  '/about'> CONTACT </AnchorLink>
            <AnchorLink to='/TRACK ORDER' >TRACK ORDER  </AnchorLink>
            <AnchorLink to='/DELIVERY & RETURNS' > DELIVERY & RETURNS  </AnchorLink>
            <AnchorLink to='/PAYMENTS' > PAYMENTS</AnchorLink>
            <AnchorLink to='/MAKE A RETURN<' > MAKE A RETURN </AnchorLink>
            <AnchorLink to='/FAQ'>FAQ</AnchorLink>
            </List>
            </Parent>

        <Parent>
         <h1>INFO</h1>
        <List>
            <AnchorLink to='/GIFT VOUCHERS' > GIFT VOUCHERS </AnchorLink>
            <AnchorLink to='/SIZE GUIDE' > SIZE GUIDE </AnchorLink>
            <AnchorLink to='/CAREERS' >CAREERS </AnchorLink>
            <AnchorLink to='/ABOUT US' > About us  </AnchorLink>
            <AnchorLink to='/GUIDE' > GUIDE  </AnchorLink>
            <AnchorLink to='/FAQ'> LEGAL Policies  </AnchorLink>
            </List>
            </Parent>

            <Parent>
                <h1>FOLLOW US</h1>
                <List>
                   <span> <InstagramIcon/>
                    <AnchorLink to='./'>INSTAGRAM</AnchorLink></span>
            
                    <span><FacebookIcon/>
               <AnchorLink to='./'>FACEBOOK</AnchorLink></span>
                 
                </List>
            </Parent>

            <Parent>
               <h1>CONTACT US</h1>
                <List>
                    <AnchorLink to='./HELLO @SHOESLY.COM'>HELLO @SHOESLY.COM</AnchorLink>
                    <AnchorLink to='./+972597097813'>+972597097813</AnchorLink>
                </List>
            </Parent>
              
            </FooterStyle>
    </Container>
            </>
  )
};

export default Footer