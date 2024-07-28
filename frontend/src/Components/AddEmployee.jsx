import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom"

const AddEmployee = () => {

  const [employee, setEmployee] = useState({
    id:'',
    empid: '',
    name: '',
    dateofbirth: '',
    religion: '',
    community: '',
    gender: '',
    maritalstatus: '',
    adhar: '',
    email: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', employee); // Debug: Log employee data

    axios.post('http://localhost:3000/auth/add_employee', employee)
      .then(result => {
        if (result.data.Status) {
          navigate('/dashboard/Employee');
        } else {
          alert(result.data.Error);
        }
      })
      .catch(err => console.log(err));
  }

  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className='d-flex justify-content-center align-items-center '>
      <div className='p-3 rounded w-25 border'>
        <h2>Add Employee</h2>
        
        
        <form className="row g-3 w-100" onSubmit={handleSubmit}>
        
        <div className="col-12">
            <label htmlFor="inputnumber" className="form-label">Id</label>
            <input type="text" className="form-control" id="inputNumber" placeholder='Enter ID'
              onChange={(e) => setEmployee({ ...employee, id: e.target.value })} />
          </div>
          
          <div className="col-12">
            <label htmlFor="inputnumber" className="form-label">EmpId</label>
            <input type="text" className="form-control" id="inputNumber" placeholder='Enter ID'
              onChange={(e) => setEmployee({ ...employee, empid: e.target.value })} />
          </div>
         
         
          <div className="col-12">
          <label htmlFor="inputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputName" placeholder='Enter Name'
              onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
          </div>
         
         
          <div className="col-12">
            <label htmlFor="inputDateofbirth" className="form-label">DATEOFBIRTH</label>
            <input type="date" className="form-control" id="inputEmail4" placeholder='Enter date'
              onChange={(e) => setEmployee({ ...employee, dateofbirth: e.target.value })} />
          </div>
          <div className="col-12">
            <label htmlFor="" className="form-label">RELIGION</label>
            <input type="text" className="form-control" id="inputreligion" placeholder='Enter religion'
              onChange={(e) => setEmployee({ ...employee, religion: e.target.value })} />
          </div>
          <div className="col-12">
            <label htmlFor="inputCommunity" className="form-label">COMMUNITY</label>
            <input type="text" className="form-control" id="inputCommunity" placeholder="Enter Community"
              onChange={(e) => setEmployee({ ...employee, community: e.target.value })} />
          </div>
          <div className="col-12">
            <label htmlFor="inputGender" className="form-label">GENDER</label>
            <div>
              <input type="radio" id="male" name="gender" value="male" onChange={(e) => setEmployee({ ...employee, gender: e.target.value })} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" onChange={(e) => setEmployee({ ...employee, gender: e.target.value })} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="other" onChange={(e) => setEmployee({ ...employee, gender: e.target.value })} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="col-12">
            <label htmlFor="inputMaritalstatus" className="form-label">Marital Status</label>
            <input type="text" className="form-control" id="inputMaritalStatus" placeholder="Enter Marital Status"
              onChange={(e) => setEmployee({ ...employee, maritalstatus: e.target.value })} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAdhar" className="form-label">ADHAR</label>
            <input type="number" className="form-control" id="inputAdhar" placeholder="Enter Adhar"
              onChange={(e) => setEmployee({ ...employee, adhar: e.target.value })} />
          </div>
          <div className="col-12">
            <label htmlFor="inputemail" className="form-label">EMAIL</label>
            <input type="email" className="form-control" id="inputemail" placeholder="Enter email"
              onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Address"
              onChange={(e) => setEmployee({ ...employee, address: e.target.value })} />
          </div>
          <div className="col-12">
            <button type="submit" onClick={handleClick} className="btn btn-primary w-100">Add Employee</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddEmployee;
