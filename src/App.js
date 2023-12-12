import './App.css';
import SignInPage from './Components/SignInPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignInPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
