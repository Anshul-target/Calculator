// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Calculator } from './components/home';

function App() {
  return (
    <Routes>
      <Route path='/calculator' element={<Calculator />} />

    </Routes>
  )
}

export default App;
