import { Card, CardMedia, Divider } from "@mui/material";

import BagItem from "./BagItem";
import ClearIcon from "@mui/icons-material/Clear";
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import {
  Div,
  Img,
  LeftStyle,
  Line,
  PayStyled,
  RemoveStyle,
  RightStyle,
  TotalStyle,
} from "./BagStyle";


export const DividerStyle = styled(Divider)`
  margin: 30px 0;
`;

export const FatherCard = styled(Card)`
  width: 80%;
  border: none;
  box-shadow: none;
`;

export const ClearStyle = styled(ClearIcon)`
  font-size: 35px;
`;

export const BagCard: React.FC = () => {
  return (
    <FatherCard>
      <CardMedia component="img"  src={"Frame9.png"}alt="img" />
    </FatherCard>
  );
};

const Bag: React.FC = () => {
  return (
    <>
      
      <Container>
        <Line>
          <LeftStyle>
            <text>BAG</text>
            <small>2 items</small>
          </LeftStyle>
          <RightStyle>
            <ClearIcon sx={{ fontSize: "140%" }} />
   
            REMOVE ALL
          </RightStyle>
        </Line>
        <Divider />
        <BagItem
          title={"NIKE SHOES BOYFRIEND PAIRS"}
          price={"USD $340.00"}
          color={"WHITE"}
          size={"42"}
          quantity={1}
          image={<BagCard />}
        />
        <RemoveStyle>
          <ClearIcon sx={{ fontSize: "140%" }} /> REMOVE
        </RemoveStyle>
        <Divider sx={{ my: 5 }} />
        <TotalStyle>Total USD $490.00</TotalStyle>
        <Box sx={{ display: "flex", justifyContent: "Center",m:'40px 0' }}>
          <button >CHECKOUT</button>
        </Box>
        <PayStyled>
          <Div>
            <Img src={"../../maestro.png"} alt="maestro" />
          </Div>
          <Div>
            <Img src={"../../visa.png"} alt="visa" />
          </Div>
        </PayStyled>
       
      </Container>
    </>
  );
};
export default Bag;
