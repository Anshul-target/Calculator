// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Calculator } from './components/home';
import { Login } from './components/login';
function App() {
  return (
    <Routes>
      <Route path='/calculator' element={<Calculator />} />
      <Route path='login' element={<Login />} />
    </Routes>
  )
}

export default App;
