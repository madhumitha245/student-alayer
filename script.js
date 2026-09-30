document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const feedback = document.getElementById("feedback").value;

    document.getElementById("message").innerText =
        "Thank you, " + name + "! Your feedback has been submitted.";

    console.log("Student:", name);
    console.log("Feedback:", feedback);

});