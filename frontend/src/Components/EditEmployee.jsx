import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EditEmployee = () => {
    const { empid } = useParams();
    const [employee, setEmployee] = useState({
        empid: '',
        name: '',
        dateofbirth: '',
        religion: '',
        community: '',
        maritalstatus: '',
        adhar: '',
        email: '',
        address: ''
    });

    useEffect(() => {
        // Fetch employee data for editing
        axios.get('http://localhost:3000/auth/employee/' + empid)
            .then(result => {
                if (result.data && result.data.Result && result.data.Result.length > 0) {
                    const data = result.data.Result[0];
                    setEmployee({
                        empid: data.empid || '',
                        name: data.name || '',
                        dateofbirth: data.dateofbirth || '',
                        religion: data.religion || '',
                        community: data.community || '',
                        maritalstatus: data.maritalstatus || '',
                        adhar: data.adhar || '',
                        email: data.email || '',
                        address: data.address || ''
                    });
                } else {
                    console.error("No employee data found");
                }
            })
            .catch(err => console.error(err));
    }, [empid]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3000/auth/edit_employee/' + empid, employee)
            .then(result => {
                console.log(result.data);
                // Optionally, you can redirect or perform other actions upon successful update
            })
            .catch(err => console.error(err));
    };

    return (
        <div className='d-flex justify-content-center align-items-center h-75'>
            <div className='p-3 rounded w-50 border'>
                <h2>Edit Employee</h2>
                <form className="row g-3" onSubmit={handleSubmit}>
                    <div className="col-12">
                        <label htmlFor="inputNumber" className="form-label">EmpId</label>
                        <input type="text" className="form-control" id="inputNumber" placeholder='Enter ID'
                            value={employee.empid}
                            onChange={(e) => setEmployee({ ...employee, empid: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" placeholder='Enter Name'
                            value={employee.name}
                            onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputDateofbirth" className="form-label">DATEOFBIRTH</label>
                        <input type="date" className="form-control" id="inputEmail4" placeholder='Enter date'
                            value={employee.dateofbirth}
                            onChange={(e) => setEmployee({ ...employee, dateofbirth: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputreligion" className="form-label">RELIGION</label>
                        <input type="text" className="form-control" id="inputreligion" placeholder='Enter religion'
                            value={employee.religion}
                            onChange={(e) => setEmployee({ ...employee, religion: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputCommunity" className="form-label">COMMUNITY</label>
                        <input type="text" className="form-control" id="inputCommunity" placeholder="Enter Community"
                            value={employee.community}
                            onChange={(e) => setEmployee({ ...employee, community: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputMaritalStatus" className="form-label">Marital Status</label>
                        <input type="text" className="form-control" id="inputMaritalStatus" placeholder="Enter Marital Status"
                            value={employee.maritalstatus}
                            onChange={(e) => setEmployee({ ...employee, maritalstatus: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAdhar" className="form-label">ADHAR</label>
                        <input type="number" className="form-control" id="inputAdhar" placeholder="Enter Adhar"
                            value={employee.adhar}
                            onChange={(e) => setEmployee({ ...employee, adhar: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputemail" className="form-label">EMAIL</label>
                        <input type="email" className="form-control" id="inputemail" placeholder="Enter email"
                            value={employee.email}
                            onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Address"
                            value={employee.address}
                            onChange={(e) => setEmployee({ ...employee, address: e.target.value })} />
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary w-100">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEmployee;
