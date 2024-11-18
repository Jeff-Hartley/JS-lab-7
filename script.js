//Declaring variables with elements by id.
//For Mouse Event
const mouseEventBtn = document.getElementById('mouseEventBtn');
const mouseEventMsg = document.getElementById('mouseEventMsg');

//For Keyboard Event
const keyboardEventInput = document.getElementById('keyboardEventInput');
const keyboardEventMsg = document.getElementById('keyboardEventMsg');

//For Form Event
const formEventForm = document.getElementById('formEventForm');
const formName = document.getElementById('formName');
const formNameError = document.getElementById('formNameError');
const formEventSuccessMsg = document.getElementById('formEventSuccessMsg');


//event listener for hovering over the button
mouseEventBtn.addEventListener("mouseenter", (event) =>{
    mouseEventMsg.textContent = "You made me appear! Good Job!"; // message that will appear when you hover the button
});

//event listener for when you stop hovering over the button
mouseEventBtn.addEventListener("mouseleave", (event) => {
    mouseEventMsg.textContent = "Hover over the button to reveal the secret message!" // message that will appear when you stop hovering
});


//Event listener for displaying the last key stroked
keyboardEventInput.addEventListener("keydown", (event) => {
    keyboardEventMsg.textContent = event.key;
});

//event listener to display sucess message / prevent defauult
formEventForm.addEventListener("submit", (event) => {
    formNameError.textContent = '';

    let isValid = true;

    if (formName.value.trim() === '') {
        formNameError.textContent = 'Please enter your name';
        isValid = false
    }

    if (isValid) {
        event.preventDefault();
        formEventSuccessMsg.textContent = "Submitted Successfully!!";
    }
    
});
