import RestaurantFeatureCard from "../components/RestaurantFeatureCard.jsx";
import "../styles/page-Splash.css";
import homePageImage from "../assets/home_page_image.png";

function Splash() {

    const restaurantFeatures =
        [
            {
                fontAwesome: 'fa-solid fa-utensils features_icon fs-1',
                title: 'Combat Feast Buffet',
                description: 'A hearty buffet modeled after a true adventurer’s feast, featuring roast boar, meat pies, and jugs of Lumbridge mead. Every dish is inspired by classic in-game food, giving diners the feeling they’re boosting their Hitpoints IRL. We’ll throw in decorative rune platters and a chef’s hat for full immersion.'
            },
            {
                fontAwesome: 'fa-solid fa-map features_icon fs-1',
                title: 'Quest Board Challenges',
                description: 'Guests can take part in real-world “quests” posted on a medieval-style bulletin board near the entrance. From “Slay the Winged Rat” (catch the rubber bat hanging from the rafters) to “Deliver the Goblin Stew” (bring a drink to a random table), these side missions earn rewards like free drinks or loyalty stamps.'
            },
            {
                fontAwesome: 'fa-solid fa-dragon features_icon fs-1',
                title: 'The Duke’s Private Lounge',
                description: 'A velvet-rope VIP area themed after Duke Horacio’s quarters, complete with candlelit booths, ornate tapestries, and a fireplace. It’s the perfect spot to sip Dragon Bitter and brag about your latest loot haul. We’ll add a bookshelf with lore books and fake clues for that extra roleplay flavor.'
            }
        ];

    const restaurantFeatureTiles = restaurantFeatures.map((restaurantFeature,index) => (
        <RestaurantFeatureCard
            key={index}
            restaurantFeature={restaurantFeature}
        />
    ));

    return (
        <>
            <div id="splash_page_body">
                <div id="splash_page_image_container"><img id="splash_page_image" src={homePageImage}/></div>

                <div id="heading_container"><h2>Restaurant Features</h2></div>

                <div id="card_container">
                    {restaurantFeatureTiles}
                </div>
            </div>
        </>
    );
}

export default Splash;