import MenuTable from "../components/MenuTable.jsx";
import dragonfireStewPicture from "../assets/food/dragonfire_stew.png";
import sharkSteakSupreme from "../assets/food/shark_steak_supreme.png";
import wizardsBrew from "../assets/food/wizards_brew.png";
import gnomeDelightPlatter from "../assets/food/gnome_delight_platter.png";
import lumbridgeApplePie from "../assets/food/lumbridge_apple_pie.png";

const food = [

    {
        name: 'Dragonfire Stew',
        description: 'A hearty stew simmered with slow-cooked beef, root vegetables, and a touch of “dragon spice” that packs a warming kick. Served in a rustic cauldron-style bowl.',
        img_link: dragonfireStewPicture,
        price: 12
    },
    {
        name: 'Shark Steak Supreme',
        description: 'A thick cut of grilled shark, basted in herb butter and flame-kissed to perfection. A favorite for high-level adventurers seeking strength.',
        img_link: sharkSteakSupreme,
        price: 25
    },
    {
        name: 'Wizard’s Brew',
        description: 'A frothy, deep-blue beverage infused with mystical herbs and berries. Said to restore mana (or at least give you a second wind). Non-alcoholic, with an optional spiked version.',
        img_link: wizardsBrew,
        price: 7
    },
    {
        name: 'Gnome Delight Platter',
        description: 'A colorful spread of miniature gnome treats — berry-glazed kebabs, crunchy veggie wraps, and honeyed pastries. Perfect for sharing (or hoarding).',
        img_link: gnomeDelightPlatter,
        price: 18
    },
    {
        name: 'Lumbridge Apple Pie',
        description: 'A traditional dessert straight from the Duke’s kitchens. Golden, flaky crust filled with spiced apples, served warm with a dollop of cream.',
        img_link: lumbridgeApplePie,
        price: 9
    }
];

function Menu() {

    return (
        <>
            <h1>Menu Page</h1>

            <MenuTable foodList={food} />
        </>
    );
}

export default Menu;