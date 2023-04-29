import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import "./style/EntryPage.css"
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import UserPage from './components/User/UserPage';
import DriverPage from './components/Driver/DriverPage';
import AdminPage from './components/Admin/AdminPage';
import DriverIntro from './components/Admin/DriverIntro';
import ViewDetails from './components/Driver/ViewDetails';
import DriversData from './components/useContext/DriversData';
import EditDetails from './components/Driver/EditDetails';
import Help from './components/Help';
import Cart from './components/User/Cart';
import ResetPassword from './components/ResetPassword';
import Verified from './components/Admin/Verified';
import Cities from './components/Admin/Cities';
import BookedVehicles from './components/BookedVehicles';
import VehicleDetails from './components/User/VehicleDetails';
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
