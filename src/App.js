// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import { ForgetPassword } from './components/forgetPass';
import './App.css';
import { Calculator } from './components/home';
import { Login } from './components/login';
import { SignUp } from './components/signup';
function App() {
  return (
    <Routes>
      <Route path='/calculator' element={<Calculator />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<SignUp />} />
    </Routes>
  )
}

export default App;
