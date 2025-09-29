import Child from "./Child.jsx";

function Parent(props) {
    const {mother, father} = props;

    let children = ["Luke", "Penelope", "Cody", "Michael"];

    return (
        <>
            <h1>I am the parent component.</h1>
            <h2>Mother: {mother}</h2>
            <h2>Father: {father}</h2>
            <Child myChildren = {children} {...props} uncle={"Mike"}/>
        </>
    );
}

export default Parent;