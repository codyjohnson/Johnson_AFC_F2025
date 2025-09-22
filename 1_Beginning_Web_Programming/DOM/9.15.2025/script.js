let btn = document.querySelector('#button');

let img = document.querySelector('#dogImage');

const BASE_URL = 'https://dog.ceo/api/breed';

btn.addEventListener('click', e => {
    console.log('clicked');
    let route = 'images/random'
    let breed = document.querySelector('#breedType').value;
    let endPoint = `${BASE_URL}/${breed}/${route}`;
    
    //http request - fetch
    fetch(endPoint)
        .then(res => res.json())
        .then(data => {
            img.setAttribute('src', data.message);
        })
        .catch(err => console.log(err));
});