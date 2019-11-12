$(document).ready(function() {
    console.log("survey js loaded");

    

    $("#submit-btn").on("click", (event) => {
        let answerArray = [];
        let name = $("#name").val();
        let photo = $("#photo").val();
       
        answerArray.push($("#input1").find("option:selected").attr("value"));
        answerArray.push($("#input2").find("option:selected").attr("value"));

        let newUser = {
            name: name,
            photo: photo,
            scores: answerArray
        };
        

        // $.post("/api/friends", newUser)
    })
});