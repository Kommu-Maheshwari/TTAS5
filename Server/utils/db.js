import mysql from 'mysql'



const con=mysql.createConnection({
    host:"localhost",
    port:"3307",
    user:"root",
    password:"",
    database:"test"
})

con.connect(function(err) {
    if(err) {
        console.error("connection error",err.stack);
        return;
    }
    //else {
        console.log("connected")
   // }
    })
    export default con;