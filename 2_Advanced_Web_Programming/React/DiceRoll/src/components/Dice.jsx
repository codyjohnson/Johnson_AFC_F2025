import {arr} from "../helper.js"

const Dice = ({randomNumber}) => {
    return (
        <i className={`fa-solid fa-dice-${arr[randomNumber]}`}></i>
    );
}

export default Dice;