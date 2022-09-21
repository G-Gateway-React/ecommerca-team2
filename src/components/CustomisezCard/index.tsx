import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import {  Overlay, Clipover } from './styleCard';
import styled from '@emotion/styled';
import Card from '@mui/material/Card/Card';

export const StyledCard = styled(Card)`
transition: all .5s ease-in-out;
  position: relative;
  flex-basis: 31.33%;
  margin-top: 1%;
  z-index: 1;
  img{
    height: 100%;
    z-index: 2 !important;
  }

  &:hover .title{
    position: absolute;
    width: 100%;
    bottom: 40px;
    left: 0;
    display: flex;
    justify-content: center;
    color: #fff;
    transition: all .5s ease-in-out;
    z-index: 3;
    font-size: 40px;
    text-transform: capitalize;
    font-weight: bold;
  }

  &:hover .overlay{
      transition: all .5s ease-in-out;
      position:  absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, .7);
      z-index: 3;
  } 
`



interface ImgCardProps {
  title: string;
  img: string;
}

 const CustomisezCard: React.FC<ImgCardProps>= ({ img, title }) => {
  return (
    <>
     <StyledCard >
      <div className='overlay'></div>
      <CardMedia component="img" image={img} alt="img" />
     
        <div className='title'>{title}</div>
   
    </StyledCard>


   {/* <StyledCard >
      <div className='overlay'></div>
    <CardMedia 
        component="img"
        src={"../../Frame8.png"}
        alt="T-shirt  "
      />
     <div className='title'>  </div>
    </StyledCard> */}
      
       
      </>

  );
}
export default  CustomisezCard;