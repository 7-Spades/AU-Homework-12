const mysql = require("mysql");
const connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Workload=2",
    database: "burgers_db"
});
}

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return
    }
    console.log("connected as Id: " + connection.threadId)
});

module.exports = connection;