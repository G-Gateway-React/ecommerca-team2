import { Container } from '@mui/system';
import React, {useEffect} from 'react' 
import CustomisezCard from '../CustomisezCard';
import CustomisezCard2 from '../CustomisezCard2';
import {CardLayout , Title , TitleSmall , CardTwice} from './styles'
import {useSelector} from 'react-redux'
import {categoryThunk} from '../../store/category/categorySlice'
import { useAppDispatch, useAppSelector } from '../../store';


 const  Cards: React.FC= () => {

  return (
   <Container>
     <>
     <Title><span>CATEGOR</span>IES</Title>
    <CardLayout>
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
