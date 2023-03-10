/* istanbul ignore file */
try {
    const { isEmpty } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");
    const checkCaracters = require("./services/validations");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        feedbackMessage = checkCaracters(gamerTagValue)
            ? "Gamer tag must have a special caracters"
            : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    
        feedbackMessageText = isEmpty(gamerTagValue)
            ? "Gamer tag cannot be empty"
            : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
