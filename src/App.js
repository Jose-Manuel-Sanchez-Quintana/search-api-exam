import './App.css';
import Search from './components/search';
import { AboutUs } from './components/aboutus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Search />}></Route>
      </Routes>
      <Routes>
        <Route path='/aboutus' element={<AboutUs />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
