import { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import OptionalPage from './Components/OptionalPage';
import SignInPage from './Components/SignInPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {

  // const location = useLocation();
  const [nav, setNav] = useState(true)

  // useEffect(() => {
  //   // Check if the current path is '/'
  //   if (location.pathname === '/') {
  //     setNav(false); // Hide the navbar if the path is '/'
  //   } else {
  //     setNav(true); // Show the navbar for other paths
  //   }
  // }, [location.pathname]);

  return (
    <div className="App">
      <BrowserRouter>
      {/* {nav && <Navbar/>} */}
      <Routes>
        {/* <Route path='/' element={<OptionalPage/>} /> */}
        <Route path='/' element={<SignInPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
