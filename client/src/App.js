import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import {UserProvider} from './context/user';

function App() {



  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
