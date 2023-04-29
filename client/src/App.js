import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import "./style/EntryPage.css"
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import UserPage from './components/UserPage';
import DriverPage from './components/DriverPage';
import AdminPage from './components/AdminPage';
import DriverIntro from './components/DriverIntro';
import ViewDetails from './components/ViewDetails';
import DriversData from './components/useContext/DriversData';
import EditDetails from './components/EditDetails';
import Help from './components/Help';
import Cart from './components/Cart';
import ResetPassword from './components/ResetPassword';
import Verified from './components/Verified';
import Cities from './components/Cities';
import BookedVehicles from './components/BookedVehicles';
import VehicleDetails from './components/Confirmed/VehicleDetails';
import './style/VehicleDetails.css'
import { ToastContainer} from 'react-toastify';

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
            <Route path='/editdetails' element={<EditDetails />} />
            <Route path='/help' element={<Help />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/resetPassword' element={<ResetPassword />} />
            <Route path='/verified' element={<Verified />} />
            <Route path='/cities' element={<Cities />} />
            <Route path='/book' element={<BookedVehicles />} />
            <Route path='/vehicledetails' element={<VehicleDetails />} />
          </Routes>
          <ToastContainer/>
        </BrowserRouter>
      </DriversData>
    </>
  );
}

export default App;
