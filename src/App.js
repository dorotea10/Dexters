
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Contact } from './components/Contact';
import { Galerija } from './components/Galerija';


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/galerija' element={<Galerija></Galerija>}></Route>
        
      </Routes>

    </div>
  )

}

export default App;
