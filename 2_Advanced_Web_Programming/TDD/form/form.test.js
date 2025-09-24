/**
 * @jest-environment jsdom
 */

let form;
const {setUpForm} = require('./form');

beforeEach(()=> {
    document.body.innerHTML = `
        <form action="/submit" method="post">
            <input type="text" name="" id="name">
            <button type="submit"></button>
        </form>
        <p id="output"></p>`;
    form = document.querySelector('form');
});

test('Does form exist?', () => {
    expect(form).not.toBeNull();
});

test('Does form submit via post?', () => {
    expect(form.method).toBe('post');
});

test("Is the form action '/submit'?", () => {
    expect(form.action).toBe('http://localhost/submit');
});

test("Does form show an error message on submit when input field is empty?", () => {
    setUpForm(document);
    form.dispatchEvent(new Event("submit"));
    const output = document.querySelector('#output');
    expect(output.textContent).toBe('Error. Input field is empty!');
});

test("Does form show a greeting on submit when input field is not empty?", () => {
    setUpForm(document);
    const input = document.querySelector('#name');
    input.value = 'Cody     ';
    form.dispatchEvent(new Event("submit"));
    const output = document.querySelector('#output');
    expect(output.textContent).toBe('Hello Cody!');
});