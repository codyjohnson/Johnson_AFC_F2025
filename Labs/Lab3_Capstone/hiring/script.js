/*Author: Cody Johnson*/
/*Assignment: Lab 3 - Capstone*/
/*Date: 20250905*/

const ageValidation = document.querySelector("#age");
let ageValid = false;

const phoneValidation = document.querySelector("#phoneNumber");
const phoneLabel = document.querySelector("#phoneNumberLabel");
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
let phoneValid = false;

const moreInfoValidation = document.querySelector("#moreInfo");
let moreInfoValid = false;

ageValidation.addEventListener("change", function (event) {
    const ageValue = Number(this.value);

    if (typeof ageValue === "number" && !isNaN(ageValue)) {
        if (ageValue >= 21 && ageValue <= 99) {
            ageValid = true;
        } else {
            alert("Age must be between 21 and 99.")
            ageValid = false;
        }
    } else {
        alert("Age must be a number.")
        ageValid = false;
    }
});

pattern="^[0-9]{3}-[0-9]{3}-[0-9]{4}$"
title="Required format is 111-222-3333."

phoneValidation.addEventListener("input", function (event) {
    const value = this.value;

    if (value === "") {
        phoneLabel.textContent = "";
        this.classList.remove("is-invalid", "is-valid");
        return;
    }

    if (phonePattern.test(value)) {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
    }
});

phoneValidation.addEventListener("change", function (event) {

    if (phonePattern.test(this.value)) {
        phoneValid = true;
    } else {
        alert("Required phone number format is 111-222-3333.");
        phoneValid = false;
    }
});
