// Add a red outline if the number entered is not between 1 and 10.
function validate() {
    if (this.value != "" && (this.value < 1 || this.value > 10)) {
        this.classList.add("red")
    } else {
        this.classList.remove("red")
    }
}

// List of all number input fields.
const elements = document.querySelectorAll("input[type=\"number\"]")

// Validate almost all number input fields by adding an event listener.
elements.forEach((element, index) => {
    // Skip the first number input field, because it contains the student number (which does not need to be validated).
    if (index != 0) {
        element.addEventListener("keyup", validate)
    }
})