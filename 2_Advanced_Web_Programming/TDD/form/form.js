function setUpForm(document) {

    const form = document.querySelector('form');
    const input = document.querySelector('#name');
    const output = document.querySelector('#output');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        input.value = input.value.trim();

        if (input.value === '') {
            output.textContent = 'Error. Input field is empty!';
        } else {
            output.textContent = `Hello ${input.value}!`;
        }
    });
}


if(typeof module.exports !== 'undefined') {
    module.exports = {setUpForm};
}

if(typeof window !== 'undefined') {
    window.setupFormApp = setupFormApp;
}

window.addEventListener('DOMContentLoaded', () => {
    if(document.querySelector('form')){
        setupFormApp(document);
    }
})

module.exports = {setUpForm};