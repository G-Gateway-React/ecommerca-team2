import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { StyledCard, Clipover } from './styleCard';

 const CustomisezCard: React.FC= () => {
  return (
    <>
    <StyledCard sx={{  width: '32%', border:'none'  }}>
      
      
      
      <CardMedia 
        component="img"
        src="../../Frame8.png"
        alt="T-shirt"
        sx={{position: 'relative'}}
      />
     
    </StyledCard><Clipover>
        <text>$24.59</text>
        <span></span>
      </Clipover></>

  );
}
export default  CustomisezCard;