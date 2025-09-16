/*Author: Cody Johnson*/
/*Assignment: Lab 3 - Capstone*/
/*Date: 20250916*/

//Setting up variables used for age input validation
const ageValidation = document.querySelector("#age");
let ageValid = true;

//Setting up variables used for phone number input normalization and validation
const phoneValidation = document.querySelector("#phoneNumber");
const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
//Phone boolean initialized to false requiring input on form submission
let phoneValid = false;

//Setting up variables for more info input validation
const moreInfoValidation = document.querySelector("#moreInfo");
let moreInfoValid = true;
const moreInfoCharCount = document.querySelector("#moreInfoCharCount");

//Grabbing the form for us in the on submit handler
const appForm = document.querySelector("#application_submission_form");

//This function detects change in the age field and validates that input, is a number, and is between 21 and 99 inclusive.
//Alerts are given to the user when bad input is received.
//ageValid boolean is mutated for use in the submission logic.
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

//This function detects a change in phone number field. It then takes the input, strips non-number characters, checks
//to see if the input is valid, creates a phone number that matches the phone number pattern, and then
//mutates the phoneValid boolean for use in the submission logic.
phoneValidation.addEventListener("change", function (event) {

    let adjustedPhoneNumber = "";
    let finalPhoneNumber = "";

    for(let i = 0; i < this.value.length; i++) {

        if (!isNaN(Number (this.value[i]))) {
            adjustedPhoneNumber += this.value[i];
        }
    }

    if (adjustedPhoneNumber.length !== 10) {
        alert("Required phone number format is 111-222-3333.");
        phoneValid = false;
    } else {
        for (let i = 0; i < adjustedPhoneNumber.length; i++) {

            finalPhoneNumber += adjustedPhoneNumber[i];

            if (i === 2 || i === 5) {
                finalPhoneNumber += "-";
            }
        }
    }

    if (phonePattern.test(finalPhoneNumber)) {
        phoneValid = true;
        this.value = finalPhoneNumber;
    }
});

//This function tracks user input as they type to remind user of character limit. This function also updates and displays
//a character counter so the user can see how many characters they have typed.
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

//This function detects a change in the more info field, performs input validation, and mutates moreInfoValid for use in
//the form submission logic.
moreInfoValidation.addEventListener("change", function (event) {

    if (moreInfoValidation.value.length <= 30) {
        moreInfoValid = true;
    } else {
        alert("Entry must be 30 characters or less.")
        moreInfoValid = false;
    }
});

//This function checks to ensure targeted inputs are valid before getting the form data and placing it in a JS object.
//The object's contents are then logged to the console.
//When bad input is received, this function provided customized alerts to assist the user in correcting their entries.
appForm.addEventListener("submit", function (event) {

    //Prevents the page from refreshing
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

        //Separate if statements were used below to allow this function to produce one or more alerts based on the number of bad
        //input received.
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
