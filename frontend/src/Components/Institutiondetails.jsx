import React, { useState } from 'react';
import './Institutiondetails.css';

const Institutiondetails = () => {
    const [institutiondetails, setInstitutiondetails] = useState({
        EmployeeID: '',
        InstitutionName: '',
        InstitutionNumber: '',
        Branch: '',
        Designation: '',
        FromDate: '',
        ToDate: '',
        EmploymentType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInstitutiondetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log(institutiondetails);
    };

    return (
        <div className="form-container">
            <h2>Employee Institution Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="employee-id">Employee ID:</label>
                    <input
                        type="text"
                        id="employee-id"
                        name="EmployeeID"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="institution-name">Institution Name:</label>
                    <input
                        type="text"
                        id="institution-name"
                        name="InstitutionName"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="institution-number">Institution Number:</label>
                    <input
                        type="text"
                        id="institution-number"
                        name="InstitutionNumber"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="branch">Branch:</label>
                    <select
                        id="branch"
                        name="Branch"
                        required
                        onChange={handleChange}
                    >
                        <option value="cse">CSE</option>
                        <option value="ece">ECE</option>
                        <option value="mech">MECH</option>
                        <option value="civil">CIVIL</option>
                        <option value="eee">EEE</option>
                        <option value="au">AU</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="aeronautical">Aeronautical</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="designation">Designation:</label>
                    <input
                        type="text"
                        id="designation"
                        name="Designation"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="from-date">From Date:</label>
                    <input
                        type="date"
                        id="from-date"
                        name="FromDate"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="to-date">To Date:</label>
                    <input
                        type="date"
                        id="to-date"
                        name="ToDate"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="employment-type">Employment Type:</label>
                    <select
                        id="employment-type"
                        name="EmploymentType"
                        required
                        onChange={handleChange}
                    >
                        <option value="regular">Regular</option>
                        <option value="deputation">Deputation</option>
                    </select>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">APPLY</button>
                </div>
            </form>
        </div>
    );
};

export default Institutiondetails;
