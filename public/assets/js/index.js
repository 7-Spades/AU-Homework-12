console.log($)

const burgerN = $(".burgerName");
const entry = $(".burgerEntry");
const eat = $(".is-it-eaten");

$(function(){
    

    eat.on("click", function(event){
        let id = $(this).data("id");
        let state = $(this).data("burgerstate");

        let newburgerState = {
            devoured: state
        }

        $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: newburgerState
        }).then(function(){
        console.log("changed devoured to ", newburgerState);
        location.reload();
        });

    });

    entry.on("click", function(event){
        event.preventDefault()

        let newburger = {
            name: burgerN.val().trim()

        }

        $.ajax("/api/burger", {
            type: "POST",
            data: newburger
        }).then(function(){
            console.log("created new " + newburger);
            location.reload();
        });
    });
    
});