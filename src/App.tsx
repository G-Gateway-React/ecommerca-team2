import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomisezCard from './Components/CustomisezCard'
import Bag from './Components/Bag/Bag';
import Cards from './Components/Cards';
import Home from './screens/Home';




const  App:React.FC =()=> {
  return (
      <BrowserRouter>
      <Routes>
           
            <Route path={"/"} element={<Home/>} />
            <Route path={"/Bag"} element={<Bag/>} />
              <Route path={"/Cards"} element={<Cards/>} />
            {/* <Route path='/about'  />
            <Route path='/'  />
            <Route path='/'  /> */}
            </Routes>
            </BrowserRouter>
  );
}

export default App;
