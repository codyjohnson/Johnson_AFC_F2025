/*Author: Cody Johnson*/
/*Assignment: Lab 3 - Capstone*/
/*Date: 20250916*/

//Initializes the target index of the food array.
let index = 0;

//Food array used for displaying the menu items.
const food = [

    foodItem = {
        name: 'Dragonfire Stew',
        description: 'A hearty stew simmered with slow-cooked beef, root vegetables, and a touch of “dragon spice” that packs a warming kick. Served in a rustic cauldron-style bowl.',
        img_link: '../assets/food/dragonfire_stew.png',
        price: 12
    },
    foodItem = {
        name: 'Shark Steak Supreme',
        description: 'A thick cut of grilled shark, basted in herb butter and flame-kissed to perfection. A favorite for high-level adventurers seeking strength.',
        img_link: '../assets/food/shark_steak_supreme.png',
        price: 25
    },
    foodItem = {
        name: 'Wizard’s Brew',
        description: 'A frothy, deep-blue beverage infused with mystical herbs and berries. Said to restore mana (or at least give you a second wind). Non-alcoholic, with an optional spiked version.',
        img_link: '../assets/food/wizards_brew.png',
        price: 7
    },
    foodItem = {
        name: 'Gnome Delight Platter',
        description: 'A colorful spread of miniature gnome treats — berry-glazed kebabs, crunchy veggie wraps, and honeyed pastries. Perfect for sharing (or hoarding).',
        img_link: '../assets/food/gnome_delight_platter.png',
        price: 18
    },
    foodItem = {
        name: 'Lumbridge Apple Pie',
        description: 'A traditional dessert straight from the Duke’s kitchens. Golden, flaky crust filled with spiced apples, served warm with a dollop of cream.',
        img_link: '../assets/food/lumbridge_apple_pie.png',
        price: 9
    }
    ];
//This block of code populates the menu when the page loads.
document.getElementById('food_image').setAttribute('src', food[index].img_link);
document.getElementById('food_image').setAttribute('alt', food[index].name);
document.getElementById('food_name').innerText = food[index].name;
document.getElementById('food_description').innerText = food[index].description;
//Internation number format function is used to provide currency symbol
document.getElementById('food_price').innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(food[index].price);

//This function is called when the next button is clicked. All food related fields on the menu are populated with an item from the array.
document.getElementById('next_button').addEventListener('click', function nextImage() {
    index = (index + 1) % food.length;
    document.getElementById('food_image').setAttribute('src', food[index].img_link);
    document.getElementById('food_image').setAttribute('alt', food[index].name);
    document.getElementById('food_name').innerText = food[index].name;
    document.getElementById('food_description').innerText = food[index].description;
    //Internation number format function is used to provide currency symbol
    document.getElementById('food_price').innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(food[index].price);
});

//This function is called when the previous button is clicked. All food related fields on the menu are populated with an item from the array.
document.getElementById('previous_button').addEventListener('click', function prevImage() {
    index = (index - 1 + food.length) % food.length;
    document.getElementById('food_image').setAttribute('src', food[index].img_link);
    document.getElementById('food_image').setAttribute('alt', food[index].name);
    document.getElementById('food_name').innerText = food[index].name;
    document.getElementById('food_description').innerText = food[index].description;
    //Internation number format function is used to provide currency symbol
    document.getElementById('food_price').innerText = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(food[index].price);
});