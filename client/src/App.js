import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import ResortsMap from './components/ResortsMap';
import Bookmarks from './components/Bookmarks';
import ResortDetail from './components/ResortDetail';
import NotFound from './components/NotFound';
import {UserProvider} from './context/user';
import ResortFilter from './components/ResortFilter';
import { PrivateRoute } from './components/PrivateRoute';

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
          <Route path='/resorts' element={<ResortsMap resorts={resorts}/>}/>
          <Route path='/bookmarks'
            element={
              <PrivateRoute>
                <Bookmarks />
              </PrivateRoute>
              }  
          />
          <Route path='/resorts/:name' element={<ResortDetail resorts={resorts} setResorts={setResorts} />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
