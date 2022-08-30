import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AnchorLink, Parent, List, FooterStyle } from "./style";

import { Container } from "@mui/system";
import SingFootersection from "../SingFooter";

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <SingFootersection />
        <FooterStyle>
          <Parent>
            <h1>CUSTOMER SERVICE</h1>
            <List>
              <AnchorLink to="/"> CONTACT </AnchorLink>
              <AnchorLink to="/">TRACK ORDER </AnchorLink>
              <AnchorLink to="/"> DELIVERY & RETURNS </AnchorLink>
              <AnchorLink to="/"> PAYMENTS</AnchorLink>
              <AnchorLink to="/"> MAKE A RETURN </AnchorLink>
              <AnchorLink to="/">FAQ</AnchorLink>
            </List>
          </Parent>

          <Parent>
            <h1>INFO</h1>
            <List>
              <AnchorLink to="/"> GIFT VOUCHERS </AnchorLink>
              <AnchorLink to="/"> SIZE GUIDE </AnchorLink>
              <AnchorLink to="/">CAREERS </AnchorLink>
              <AnchorLink to="/"> About us </AnchorLink>
              <AnchorLink to="/"> GUIDE </AnchorLink>
              <AnchorLink to="/"> LEGAL Policies </AnchorLink>
            </List>
          </Parent>

          <Parent>
            <h1>FOLLOW US</h1>
            <List>
              <span>
                {" "}
                <InstagramIcon />
                <AnchorLink to="./">INSTAGRAM</AnchorLink>
              </span>

              <span>
                <FacebookIcon />
                <AnchorLink to="./">FACEBOOK</AnchorLink>
              </span>
            </List>
          </Parent>

          <Parent>
            <h1>CONTACT US</h1>
            <List>
              <AnchorLink to="./">HELLO @SHOESLY.COM</AnchorLink>
              <AnchorLink to="./">+972597097813</AnchorLink>
            </List>
          </Parent>
        </FooterStyle>
      </Container>
    </>
  );
};

export default Footer;
