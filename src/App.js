import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Home from './PAGES/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './component/Details';
import Addpost from './PAGES/Addpost';
import Bloglist from './PAGES/Bloglist';
import Editblog from './PAGES/Editblog';
import Login from './PAGES/Login';
import Protected from './PAGES/Protected';
import Private from './PAGES/Private';
import Notfound from './PAGES/notfound';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route >
          <Route path="/read/:id" element={<Details />} />
          <Route path='/bloglist' element={<Bloglist />} />
          <Route path="/addpost" element={<Addpost />} />

          <Route path="/Editblog/:blogId" element={<Editblog />} />

          {/* <Route path='/login' element={<Login />}></Route> */}
          <Route path="/notfound" element={<Notfound />}></Route >
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
