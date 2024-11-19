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

//For Focus Event 
const focusEventInput = document.getElementById('focusEventInput');
const focusEventMsg = document.getElementById('focusEventMsg');

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

focusEventInput.addEventListener("focus", () => {
    focusEventMsg.textContent = "The input is in focus! You found the message!";
});

focusEventInput.addEventListener("blur", () => {
    focusEventMsg.textContent = "The input went out of focus and is now 'blurred'!";
});

 // Access the parent element
 const delegationBtnContainer = document.getElementById('delegationBtnContainer');
 const eventDelegationMsg = document.getElementById('eventDelegationMsg');

 // Attach event listener to the parent element
 delegationBtnContainer.addEventListener('click', (event) => {
     
     if (event.target.matches(".delegationBtn")) {
         eventDelegationMsg.textContent = event.target.textContent;
         
         
     }
 });
