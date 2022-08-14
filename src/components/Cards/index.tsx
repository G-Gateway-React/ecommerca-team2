import { Container } from '@mui/system';
import React from 'react' 
import CustomisezCard from '../CustomisezCard';
import CustomisezCard2 from '../CustomisezCard2';
import {CardLayout , Title , TitleSmall , CardTwice} from './styles'

 const  Cards: React.FC= () => {
  return (
   <Container>
     <>
     <Title><span>CATEGOR</span>IES</Title>
    <CardLayout>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
    </CardLayout>

    <TitleSmall>NEW BOOTS ADDED RECENTLY</TitleSmall>
    <CardTwice>
    <CustomisezCard2/>
    <CustomisezCard2/>
    <CustomisezCard2/>
    <CustomisezCard2/>
    </CardTwice>

    </>
   </Container>
  );
}
export default Cards;
