import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/employee')
      .then(result => {
        if (result.data.Status) {
          setEmployee(result.data.Result)
        } else {
          alert(result.data.Error)
        }
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='px-5 py-3'>
      <div className='d-flex justify-content-center mt-2'>
        <h3>Employee List</h3>
      </div>

      <Link to="/dashboard/add_employee" className='btn btn-success'>Add Employee</Link>
      <div className='mt-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>EMPID</th>
              <th>NAME</th>
              <th>DATEOFBIRTH</th>
              <th>RELIGION</th>
              <th>COMMUNITY</th>
              <th>GENDER</th>
              <th>MARITALSTATUS</th>
              <th>ADHAR</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee, index) => {
              return (
                <tr key={employee.empid || index}>
                  <td>{employee.empid}</td>
                  <td>{employee.name}</td>
                  <td>{employee.dateofbirth}</td>
                  <td>{employee.religion}</td>
                  <td>{employee.community}</td>
                  <td>{employee.gender}</td>
                  <td>{employee.maritalstatus}</td>
                  <td>{employee.adhar}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <Link to={'/dashboard/edit_employee/' + employee.empid} className="btn btn-info btn-sm me-2">Edit</Link>
                    <button className="btn btn-warning btn-sm">Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee;
