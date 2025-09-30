import monsters from './util/database.js'
import './App.css'
import {Button, CardBody, CardSubtitle, CardText, CardTitle} from 'reactstrap';
import { Card } from 'reactstrap';
import myImage from './assets/lumbridge_castle_tavern.png';

function App() {

    console.log(monsters);

    const monsterCards = monsters.map((monster, index) => {
       return(

           <Card
            style={{
                width: '18rem'
            }}
        >
            <img
                alt="Sample"
                src={myImage}
                src='../public/assets/newNameForTheImage.png'
            />
            <CardBody>
                <CardTitle tag="h5">
                    First Name: {monster.firstName}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Last Name: {monster.lastName}
                </CardSubtitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Age: {monster.age}
                </CardSubtitle>
                <CardText>
                    More Info: {monster.moreInfo}
                </CardText>
                <Button>
                    Button
                </Button>
            </CardBody>
        </Card>
       );
    });

  return (
    <>
        <h1>Fake Database App</h1>
        {monsterCards}

        <Button color="danger">Danger!</Button>

    </>
  );
}

export default App;
