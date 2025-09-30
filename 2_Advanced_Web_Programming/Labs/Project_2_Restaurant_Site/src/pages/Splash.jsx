import RestaurantFeatureCard from "../components/RestaurantFeatureCard.jsx";
import "../styles/page-Splash.css";

function Splash() {

    return (
        <>
            <div id="splash_page_body">
                <div id="card_container">
                    <RestaurantFeatureCard />
                    <RestaurantFeatureCard />
                    <RestaurantFeatureCard />
                </div>
            </div>
        </>
    );
}

export default Splash;