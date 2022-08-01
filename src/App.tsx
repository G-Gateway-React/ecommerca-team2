
import { Route, Routes } from 'react-router-dom';
import './App.css';


const  App:React.FC =()=> {
  return (
    <div >
      <Routes>
            <Route path='/' element={<footer/>} />
            {/* <Route path='/about'  />
            <Route path='/' />
            <Route path='/' />
            <Route path='/'  />
            <Route path='/'  />
            <Route path='/'  /> */}
            </Routes>

    </div>
  );
}

export default App;
