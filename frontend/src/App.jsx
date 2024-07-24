
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Frontpage from './Components/Frontpage'
import Home from './Components/Home'
import Employee from './Components/Employee'
import Filter from './Components/Filter'
import AddEmployee from './Components/AddEmployee'
import EditEmployee from './Components/EditEmployee'


import Loginas from './Components/Loginas'
import Applicant from './Components/Applicant'
import Applicantdashboard from './Components/Applicantdashboard'
import Institutiondetails from './Components/Institutiondetails'



function App() {
  
  return (
    <BrowserRouter>
    <Routes>
    <Route path='' element={<Loginas/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/dashboard/Frontpage' element={<Frontpage/>}></Route>
      <Route path='/dashboard/Home' element={<Home />}></Route>
      <Route path='/dashboard/Employee' element={<Employee/>}></Route>
      <Route path='/dashboard/Filter' element={<Filter/>}></Route>
      <Route path='/dashboard/add_employee' element={<AddEmployee/>}></Route>
      <Route path='/dashboard/edit_employee/:id' element={<EditEmployee/>}></Route>
      
      <Route path='/dashboard/applicant' element={<Applicant/>}></Route>
     
      <Route path='/applicantdashboard' element={<Applicantdashboard/>}></Route>
      <Route path='/applicantdashboard/institutiondetails' element={<Institutiondetails/>}></Route>
      

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
