function Child(props) {

    let result = props.myChildren.map(
        (child, index) => {
            return <p key={index}>My child is: {child}</p>
        }
    )

    return (
        <>
            <h1>I am the child component.</h1>
            {result}
            <p>MY FATHER IS: {props.father}</p>
            <p>MY MOTHER IS: {props.mother}</p>
            <p>MY UNCLE IS: {props.uncle}</p>
        </>
    );
}

export default Child;