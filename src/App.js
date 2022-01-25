import './App.scss';
import Doctor from './components/Doctor';
import DoctorList from './components/DoctorList';
import Login from './components/Login';
import Register from './components/Register';
import AboutUs from './components/AboutUs';
import {Routes, Route} from  'react-router-dom';
import Policy from './components/Policy';
import Index from './components/Index';

function App() {
  const doctors = [
    {
      "img": "",
      "name": "doc1",
      "specialty": "couples"
    },
    {
      "img": "",
      "name": "doc2",
      "specialty": "kids"
    }
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="doctors" element={<DoctorList doctors={doctors} />} />
        <Route path="doctors/:id" element={<Doctor />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="policy" element={<Policy />} />
      </Routes>
    </div>
  );
}

export default App;
