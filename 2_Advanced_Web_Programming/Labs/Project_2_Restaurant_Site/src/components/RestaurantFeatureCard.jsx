import {Card, CardBody, CardText, CardTitle} from "reactstrap";
import "../styles/component-RestaurantFeatureCard.css";

function RestaurantFeatureCard({restaurantFeature}) {
    return (
        <Card className='card'
              style={{
                  width: '18rem'
              }}
        >
            <CardBody>
                <CardTitle tag="h5">
                    <i class={restaurantFeature.fontAwesome}></i>
                    <h3 className="fs-2 text-body-emphasis">{restaurantFeature.title}</h3>
                </CardTitle>
                <CardText>
                    {restaurantFeature.description}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default RestaurantFeatureCard;