// Return the Element object of the corresponding element.
function $(element) {
    return document.querySelector(element)
}

// When the user scrolls the page, update the progress bar.
window.onscroll = function() {
    $("#progress").style.width = (document.body.scrollTop || document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100 + "%"
}

// Save the value of the input field in the localStorage.
function save() {
    localStorage.setItem(this.name, JSON.stringify({ [this.name]: this.value }))
}

// Save the name and student number.
$("#naam").addEventListener("keyup", save)
$("#studentnummer").addEventListener("keyup", save)

// Fill in the name and student number from the localStorage, if there are any.
try {
    $("#naam").value = JSON.parse(localStorage.getItem("naam")).naam
    $("#studentnummer").value = JSON.parse(localStorage.getItem("studentnummer")).studentnummer
} catch { }

// List of all number input fields.
const elements = document.querySelectorAll("input[type=\"number\"]")

// Validate almost all number input fields.
elements.forEach((element, index) => {
    // Skip the first number input field, because it contains the student number (which does not need to be validated).
    if (index != 0) {
        element.addEventListener("keyup", function() {
            // Add a red outline if the number entered is not between 1 and 10.
            if (this.value != "" && (this.value < 1 || this.value > 10)) {
                this.classList.add("red")
            } else {
                this.classList.remove("red")
            }
        })
    }
})

// Clear the localStorage upon a click on the "Reset" button.
$("#reset").addEventListener("click", function() {
    localStorage.clear()
})