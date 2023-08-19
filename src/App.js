import './App.css';
import Manage from './components/Management/Manage';
import Navbar from './components/Navbar/Navbar';
import Section from './components/section/Section';
import { Routes,Route } from 'react-router-dom';
import Signup from './components/Registeration/Signup';
import UserLogin from './components/Login/UserLogin'
import AdminLogin from './components/Login/AdminLogin'
function App() {
  return (
    <div className='App'>
   
   
     
  

    <Routes>
      <Route path='/'>
    <Route path='/' element={<><Navbar/><Section/><Manage/></>}/>
      </Route> 
  
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/user' element={<UserLogin/>}/>
    <Route path='/admin' element={<AdminLogin/>}/>
    </Routes>
    </div>
  );
}

export default App;
