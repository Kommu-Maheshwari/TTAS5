import express from 'express';
import con from '../utils/db.js';
import jwt from "jsonwebtoken";

const router = express.Router();

router.post('/adminlogin', (req, res) => {
    const sql = "SELECT * from admin where email=? and password=?";
    
    con.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign({ role: "admin", email: email }, "jwt_secret_key", { expiresIn: '10d' });
            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
});

router.post('/applicantlogin', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * from applicant where email=? and password=?";

    con.query(sql, [email, password], (err, result) => {
        if (err) return res.status(500).json({ loginStatus: false, Error: "Query error" });
        if (result.length > 0) {
            const email = result[0].email;
            const token = jwt.sign({ role: "applicant", email: email }, "jwt_secret_key", { expiresIn: '10d' });
            res.cookie('token', token);
            return res.json({ loginStatus: true });
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" });
        }
    });
});

router.post('/add_employee', (req, res) => {
  
    console.log('Request Body:', req.body);  // Log the incoming request body
    const sql = "INSERT INTO employee(empid, name, dateofbirth, religion, community, gender, maritalstatus, adhar, email, address) VALUES(?)";
    const values = [
        req.body.empid,
        req.body.name,
        req.body.dateofbirth,
        req.body.religion,
        req.body.community,
        req.body.gender,
        req.body.maritalstatus,
        req.body.adhar,
        req.body.email,
        req.body.address
    ];

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true });
    });
});

router.get('/employee', (req, res) => {
    const sql = "SELECT * FROM employee";
    con.query(sql, (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true, Result: result });
    });
});

router.get('/employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee WHERE empid=?";
    con.query(sql, [id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" + err });
        return res.json({ Status: true, Result: result });
    });
});

router.put('/edit_employee/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'UPDATE employee SET name=?, dateofbirth=?, religion=?, community=?, maritalstatus=?, adhar=?, email=?, address=? WHERE empid=?';
    const values = [
        req.body.name,
        req.body.dateofbirth,
        req.body.religion,
        req.body.community,
        req.body.maritalstatus,
        req.body.adhar,
        req.body.email,
        req.body.address
    ];
    con.query(sql, [...values, id], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" + err });
        return res.json({ Status: true, Result: result });
    });
});

router.post('/institutiondetails', (req, res) => {
    const sql = "INSERT INTO institutiondetails(employeeid, institutionname, institutionnumber, branch, designation, fromdate, todate, employementtype) VALUES(?)";
    const values = [
        req.body.employeeid,
        req.body.institutionname,
        req.body.institutionnumber,
        req.body.branch,
        req.body.designation,
        req.body.fromdate,
        req.body.todate,
        req.body.employementtype,
      
    ];

    con.query(sql, [values], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Query error" });
        return res.json({ Status: true });
    });
});


export { router as adminRouter };
