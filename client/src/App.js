import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Resorts from './components/Resorts';
import Bookmarks from './components/Bookmarks';
import ResortDetail from './components/ResortDetail';
import {UserProvider} from './context/user';

function App() {

  const [resorts, setResorts] = useState([]);

  useEffect(() => {
    fetch('./resorts/show')
    .then(r => r.json())
    .then(r => setResorts(r))
  }, []);

  return (
    <UserProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/resort-map' element={<Resorts resorts={resorts}/>}/>
          <Route path='/bookmarks' element={<Bookmarks />}/>
          <Route path='/resortdetail' element={<ResortDetail resorts={resorts} setResorts={setResorts} />}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
