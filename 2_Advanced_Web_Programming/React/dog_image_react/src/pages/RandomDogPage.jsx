import axios from "axios";
import {useState, useEffect} from "react";
import "../randomDogPage.css";

function RandomDogPage() {

    const baseRoute = "https://dog.ceo/api"

    const[dogSource, setDogSource] = useState([""]);

    const getDogImage = async () => {
        let route = "breeds/image/random"
        try {
            const response = await axios.get(`${baseRoute}/${route}`);
            setDogSource(response.data.message);
            console.log(response.data.message);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDogImage();
    }, []);

    const handleClick = () => {
        getDogImage();
    }

    return (
        <>
            <div>
                <h1>Random Dog Image Generator</h1>
            </div>

            <div id={"dogImageContainer"}>
                <img src={dogSource} alt=""/>
            </div>

            <div>
                <button onClick={handleClick}>Click Me!</button>
            </div>
        </>
    )
}

export default RandomDogPage;