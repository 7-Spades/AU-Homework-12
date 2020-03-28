const express = require("express");

const router = express.Router();

const burger = require("../model/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var burgerobj = {
            burger: data
        };
        console.log(burgerobj);
        res.render("index", burgerobj);
    });
});

router.post("/api/:burger", function(req, res){
    burger.create(["name"],
    [req.body.name],
    function(result){
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", function(req, res){
    let condition = "id = " + req.prams.id;

    console.log("condition", condition);


    burger.update({
        devoured: req.body.devoured
    },
    condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end()
        } else{
            res.status(200).end()
        }
    });
});


module.exports = router;