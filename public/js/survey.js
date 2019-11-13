$(document).ready(function() {
    console.log("survey js loaded");

    

    $("#submit-btn").on("click", (event) => {
        let answerArray = [];
        let name = $("#name").val();
        let photo = $("#photo").val();
       
        answerArray.push($("#input1").find("option:selected").attr("value"));
        answerArray.push($("#input2").find("option:selected").attr("value"));
        answerArray.push($("#input3").find("option:selected").attr("value"));
        answerArray.push($("#input4").find("option:selected").attr("value"));
        answerArray.push($("#input5").find("option:selected").attr("value"));
        answerArray.push($("#input6").find("option:selected").attr("value"));
        answerArray.push($("#input7").find("option:selected").attr("value"));
        answerArray.push($("#input8").find("option:selected").attr("value"));
        answerArray.push($("#input9").find("option:selected").attr("value"));
        answerArray.push($("#input10").find("option:selected").attr("value"));

        let newUser = {
            name: name,
            photo: photo,
            scores: answerArray
        };
        
        console.log(newUser);
        

        // $.post("/api/friends", newUser)
    })
});