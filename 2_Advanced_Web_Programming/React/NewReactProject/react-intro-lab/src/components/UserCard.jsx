const UserCard = ({name, age}) => {
    return (
        <div style={{ padding: '10px', border: '3px solid black', marginBottom: '10px' }}>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );
}

export default UserCard;