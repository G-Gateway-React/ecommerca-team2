import styled from '@emotion/styled'
import Card from "@mui/material/Card";


export const CustomCard = styled(Card)`
transition: all .5s ease-in-out;
 :hover {
    filter: grayscale(80%);
  }
  `

export const Overlay = styled.div`
  position:  absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`
