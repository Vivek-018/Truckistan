import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import UserPage from './components/UserPage';
import DriverPage from './components/DriverPage';
import AdminPage from './components/AdminPage';
import DriverIntro from './components/DriverIntro';
import ViewDetails from './components/ViewDetails';
import DriversData from './components/useContext/DriversData';

function App() {
  return (
    <>
      <DriversData>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<UserPage />} />
            <Route path='/driver' element={<DriverPage />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/driverintro' element={<DriverIntro />} />
            <Route path='/viewdetails' element={<ViewDetails />} />
          </Routes>
        </BrowserRouter>
      </DriversData>
    </>
  );
}

export default App;
