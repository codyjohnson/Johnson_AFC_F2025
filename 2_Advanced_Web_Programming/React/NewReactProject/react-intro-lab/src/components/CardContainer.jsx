
const CardContainer = ({children}) => {
    return (
        <>
            <div style={{border: 'solid 2px black', padding: '20px'}}>
                {children}
            </div>
        </>
    );
}

export default CardContainer;