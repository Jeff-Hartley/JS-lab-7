//Declaring variables with elements by id.
//For Mouse Event
const mouseEventBtn = document.getElementById('mouseEventBtn');
const mouseEventMsg = document.getElementById('mouseEventMsg');

//For Keyboard Event
const keyboardEventInput = document.getElementById('keyboardEventInput');
const keyboardEventMsg = document.getElementById('keyboardEventMsg');

//event listener for hovering over the button
mouseEventBtn.addEventListener("mouseenter", (event) =>{
    mouseEventMsg.textContent = "You made me appear! Good Job!"; // message that will appear when you hover the button
});

//event listener for when you stop hovering over the button
mouseEventBtn.addEventListener("mouseleave", (event) => {
    mouseEventMsg.textContent = "Hover over the button to reveal the secret message!" // message that will appear when you stop hovering
});

keyboardEventInput.addEventListener("keydown", (event) => {
    keyboardEventMsg.textContent = event.key;
});
