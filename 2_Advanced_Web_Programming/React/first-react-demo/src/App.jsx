import "./App.css";


const App = () => {
    //before the return = business logic
    const theStyles = {
        color: "green",
        fontSize: "38px"
    }





    return (
        //fragment
        <>
        <h1 style={theStyles}>My First App</h1>
            <h2 className="madeUpClassName">H2 heading</h2>
        </>
    );
}

export default App;