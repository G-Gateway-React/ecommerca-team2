import { Container } from '@mui/system';
import axios from 'axios';
import React from 'react' 
import CustomisezCard from '../CustomisezCard';
import CustomisezCard2 from '../CustomisezCard2';
import {CardLayout , Title , TitleSmall , CardTwice} from './styles'

interface Category {
  id: string;
  title: string;
  image: string;
}

const img =
  "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const Cards: React.FC = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  React.useEffect(() => {
    axios
      .get("https://pro-commerce1.herokuapp.com/api/v1/category", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbXlhYTJiQGdtYWlsLmNvbSIsIm5hbWUiOiJMYW15YWEiLCJpYXQiOjE2NjIyNzEwNjV9.OquNvNhbXQlw7Hh9kFsSnrjIfQA8x1WvRc1bsGosJnU",
        },
      })
      .then((res) => {
        console.log(res);
        setCategories(
          res.data.map((item: any) => {
            return {
              ...item,
              image: img,
            };
          })
        );
      });
  }, []);
  return (
    <>
   <Container>
     <Title><span>CATEGOR</span>IES</Title>
    <CardLayout>
     {categories.map((item) => (
     <CustomisezCard title={item.title} img={item.image} /> 
      ))} </CardLayout>
      

         {/* <CardLayout> 
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
      <CustomisezCard/>
    </CardLayout> */}

    <TitleSmall>NEW BOOTS ADDED RECENTLY</TitleSmall>
    <CardTwice>
    <CustomisezCard2/>
    <CustomisezCard2/>
    <CustomisezCard2/>
    <CustomisezCard2/>
    </CardTwice>
  </Container>
    </>
  );
}
export default Cards;
