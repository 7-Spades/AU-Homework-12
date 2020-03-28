const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);
        });
    },
    create: function(val, name, cb){
        orm.create("burger", val, name, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition,cb){
        orm.update("burger",objColVals, condition, function(res){
            cb(res);
        });
    },
};

module.exports = burger