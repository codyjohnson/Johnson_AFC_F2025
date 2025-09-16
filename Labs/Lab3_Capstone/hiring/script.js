/*Author: Cody Johnson*/
/*Assignment: Lab 3 - Capstone*/
/*Date: 20250905*/

const ageValidation = document.querySelector("#age");
let ageValid = true;

const phoneValidation = document.querySelector("#phoneNumber");
const phoneLabel = document.querySelector("#phoneNumberLabel");
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
let phoneValid = false;

const moreInfoValidation = document.querySelector("#moreInfo");
let moreInfoValid = true;
const moreInfoCharCount = document.querySelector("#moreInfoCharCount");

const appForm = document.querySelector("#application_submission_form");


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

moreInfoValidation.addEventListener("input", function (event) {

    moreInfoCharCount.innerText = "Character Count: " + moreInfoValidation.value.length;

    if (moreInfoValidation.value === "") {
        this.classList.remove("is-invalid", "is-valid");
        return;
    }
    if (moreInfoValidation.value.length <= 30) {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
    } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
    }
});

moreInfoValidation.addEventListener("change", function (event) {

    if (moreInfoValidation.value.length <= 30) {
        moreInfoValid = true;
    } else {
        alert("Entry must be 30 characters or less.")
        moreInfoValid = false;
    }
});

appForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (ageValid && phoneValid && moreInfoValid) {

        let formData = {
            firstName: document.querySelector("#firstName").value,
            lastName: document.querySelector("#lastName").value,
            address1: document.querySelector("#address1").value,
            address2: document.querySelector("#address2").value,
            city: document.querySelector("#city").value,
            state: document.querySelector("#state").value,
            age: document.querySelector("#age").value,
            phoneNumber: document.querySelector("#phoneNumber").value,
            email: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
            maritalStatus: document.querySelector('.maritalStatusRadio:checked')?.value || "",
            colors: Array.from(document.querySelectorAll('.colors:checked')).map(color => color.value),
            moreInfo: document.querySelector("#moreInfo").value
        };

        console.log(formData);

    } else {
        
        if (!ageValid) {
            alert("Submission error. Age must be a number. Age must also be between 21 and 99.")
        }
        
        if (!phoneValid) {
            alert("Submission error. Required phone number format is 111-222-3333.")
        }
        
        if (!moreInfoValid) {
            alert("Submission error. More info entry must be 30 characters or less.")
        }
    }
});
