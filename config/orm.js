const connection = require("./connection.js");

const orm = {
    all: function(devoured,table, cb){
        let queryString = "SELECT ?? FROM ??";
        connection.query(queryString,[devoured, table], function(err, res){
            if(err) throw err;
            cb(res);
        });
    },
    create: function(table, name, devoured, rname, rdevoured,cb){
        let queryString = "INSERT INTO ?? (??, ??) VALUES (??, ??)"
        console.log(queryString);
        connection.query(queryString, [table, name, devoured, rname, rdevoured], function(err, res){
            if(err) throw err;
            cb(res);
        });
    },
    update: function(table, val, condition, cb){
        let queryString = "UPDATE ?? SET ?? WHERE ??";
        console.log(queryString);
        connection.query(queryString, [table, val, condition],function(err, res){
            if(err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;