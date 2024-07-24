import React from 'react';
import './adb.css';
import { useNavigate } from 'react-router-dom';

const Applicantdashboard = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add form validation or data handling here if needed
        navigate('/applicantdashboard/institutiondetails');
    };

    return (
        <div className="form-container">
            <h2>Employee Details Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="employee-id">Employee ID:</label>
                    <input type="text" id="employee-id" name="employee-id" required />
                </div>
                <div className="form-group">
                    <label htmlFor="employee-name">Employee Name:</label>
                    <input type="text" id="employee-name" name="employee-name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob" required />
                </div>
                <div className="form-group">
                    <label htmlFor="religion">Religion:</label>
                    <input type="text" id="religion" name="religion" required />
                </div>
                <div className="form-group">
                    <label htmlFor="community">Community:</label>
                    <input type="text" id="community" name="community" required />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="aadhar-number">Aadhar Number:</label>
                    <input type="text" id="aadhar-number" name="aadhar-number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile-number">Mobile Number:</label>
                    <input type="text" id="mobile-number" name="mobile-number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="marital-status">Marital Status:</label>
                    <select id="marital-status" name="marital-status" required>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                    </select>
                </div>
                <div className="form-group-full">
                    <label htmlFor="address">Address:</label>
                    <textarea id="address" name="address" rows="3" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Applicantdashboard;
