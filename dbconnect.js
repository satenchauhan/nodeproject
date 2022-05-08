const mysql = require("mysql");
 
exports.conn = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "onequote", 
});


exports.initDB = (conn) =>{ 
    conn.connect((error) =>{
        if(error){
            throw error;
        }else{
            console.log('connected.........');
        } 
        
    })
}







