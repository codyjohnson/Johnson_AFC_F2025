import '../styles/style.css'

export default function Table({ rows }) {
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Height</th>
                    <th>Hair Color</th>
                    <th>Gender</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((character) => (
                    <tr key={character.index}>
                        <td>{character.name}</td>
                        <td>{character.height}</td>
                        <td>{character.hair_color}</td>
                        <td>{character.gender}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
}