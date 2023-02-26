import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'

function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<LandingPage/>} />
           <Route path='/signup' element={<Signup/>} />
           <Route path='/login' element={<Login/>} />
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
