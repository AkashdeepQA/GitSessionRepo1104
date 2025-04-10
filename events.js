let button = document.getElementById('clickHere-btn'); //finding the element
button.addEventListener('mousedown', displayMessageOnMouseDown); //Adding event listener to the element
//Defining the event function
function displayMessageOnMouseDown() {
    let newElement = document.createElement('p');
    newElement.textContent = 'You have pressed mouse button down on Click Here button!';
    newElement.className = 'about-text';
    button.after(newElement);
}

button.addEventListener('mouseup', displayMessageOnMouseUp); //Adding event listener to the element
//Defining the event function
function displayMessageOnMouseUp() {
    let newElement = document.createElement('p');
    newElement.textContent = 'You have released mouse button Click Here button!';
    newElement.className = 'about-text';
    button.after(newElement);
}

let editBox = document.getElementById('enterText');
editBox.addEventListener('keydown', displayMessageOnKeyDown);
function displayMessageOnKeyDown(event) {
    let newElement = document.createElement('p');
    newElement.textContent = `You have pressed "${event.key}" in the edit box`;
    newElement.className = 'about-text';
    editBox.after(newElement);
}

let nameEditBox = document.getElementById('name');
nameEditBox.addEventListener('focus', displayMessageOnFocus);
function displayMessageOnFocus() {
    let newElement = document.createElement('p');
    newElement.textContent = `Please enter your name here!`;
    newElement.className = 'about-text';
    nameEditBox.after(newElement);
}

let emailEditBox = document.getElementById('email');
emailEditBox.addEventListener('blur', displayMessageOnLosingFocus);
function displayMessageOnLosingFocus() {
    if (!this.value) {
        let newElement = document.createElement('p');
        newElement.textContent = `Email is a mandatory field and cannot be left blank`;
        newElement.className = 'about-text';
        emailEditBox.after(newElement);
    }
    else {
        let newElement = document.createElement('p');
        newElement.textContent = `Thank you for providing your email!`;
        newElement.className = 'about-text';
        emailEditBox.after(newElement);
    }
}

let submitButton = document.getElementById('submit-btn');
let newElement = document.createElement('p');
newElement.className = 'about-text';
submitButton.after(newElement);
window.addEventListener('resize', diplayMessageOnWindowResize);
function diplayMessageOnWindowResize() {
    newElement.innerText = `The window is resized to '${window.innerHeight} X ${window.innerWidth}'`;
 }