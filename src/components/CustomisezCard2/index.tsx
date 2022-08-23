import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { CustomCard ,Overlay} from './styles';


 const CustomisezCard2: React.FC= () => {
  return (
    <CustomCard sx={{ width :'24%' , borderRadius: '0'}}>
    
      <Overlay></Overlay>
      
      <CardMedia
        component="img"
        image="../../img-section2.png"
        alt="T-shirt"
         >
      </CardMedia>
    </CustomCard>
  );
}
export default  CustomisezCard2;