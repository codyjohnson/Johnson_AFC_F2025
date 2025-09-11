/*Author: Cody Johnson*/
/*Assignment: Lab 3 - Capstone*/
/*Date: 20250905*/

let index = 0;
const food_picture = [
    "../assets/food/dragonfire_stew.png",
    "../assets/food/gnome_delight_platter.png",
    "../assets/food/lumbridge_apple_pie.png",
    "../assets/food/shark_steak_supreme.png",
    "../assets/food/wizards_brew.png"
]

document.getElementById('next_button').addEventListener('click', function () {
    index = (index + 1) % food_picture.length;
    document.getElementById('food_image').setAttribute('src', food_picture[index]);
});

document.getElementById('previous_button').addEventListener('click', function () {
    index = (index - 1 + food_picture.length) % food_picture.length;
    document.getElementById('food_image').setAttribute('src', food_picture[index]);
});