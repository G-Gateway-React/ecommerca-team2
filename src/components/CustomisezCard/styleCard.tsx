import styled from '@emotion/styled'
import Card from "@mui/material/Card";



export const StyledCard = styled(Card)`
transition: all .5s ease-in-out;
 :hover {
    filter: grayscale(80%);

  }
  position: relative;

`
export const Clipover = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 55px;
  width: 161px;
  height: 64px;
  background: #d1094b;
  border: 1px solid #d1094b;
  border-radius: 5px;
  clip-path: polygon(100% 0, 73% 52%, 100% 100%, 0 100%, 0% 50%, 0 0);

  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
  span {
    position: absolute;
    width: 7px;
    height: 48px;
    right: 147px;
    background: #ffffff;
    border-radius: 1px;
    top: 7px;
  }
  text {
    color: #ffffff;
    position: absolute;
    right: 54px;
    top: 17px;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }

`;

export const Overlay = styled.div`
  position:  absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`


