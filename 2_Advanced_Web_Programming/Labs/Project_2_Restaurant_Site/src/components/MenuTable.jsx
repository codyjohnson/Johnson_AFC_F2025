import {Table} from "reactstrap";

function Menu({foodList}) {

    const tableRows = foodList.map((food, index) => (
        <tr key={index}>
            <td><img src={food.img_link} alt={food.name}/></td>
            <td>{food.name}</td>
            <td>{food.description}</td>
            <td>{food.price}</td>
        </tr>
    ));



    return (
        <>

            <Table dark>
                <thead>
                <tr>
                    <th>
                        Picture
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
                </thead>
                <tbody>



                {tableRows}


                </tbody>
            </Table>


        </>
    );
}

export default Menu;