$(document).ready(function () {
    $("#submit-btn").on("click", (event) => {
        event.preventDefault();

        let answerArray = [];
        let name = $("#name").val();
        let photo = $("#photo").val();

        for (let i = 1; i <= 10; i++) {
            answerArray.push($(`#input${i}`).find("option:selected").attr("value"));
        };

        let newUser = {
            name: name,
            photo: photo,
            scores: answerArray
        };

        $
            .post("/api/friends", newUser)
            .then(function(data) { 
                console.log(data);           
            });
    });

});