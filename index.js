let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOOM";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let defuserBonbText = defuserEl.value;
    if (event.key === "Enter" && defuserBonbText === "defuse" && countdown !== 0) {
        timerEl.textContent = "YOU DID IT";
        timerEl.style.color = 'green';
        timerEl.style.fontWeight = 'bold';
        clearInterval(intervalId);
    }
})