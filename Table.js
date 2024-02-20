import Table from 'react-bootstrap/Table';

function Tables() {
    const data = [
        { id: 101, name: "Pankaj", city: "surat" },
        { id: 102, name: "Rinku", city: "Vesu" },
        { id: 103, name: "Alok", city: "Varachha" },
        { id: 104, name: "Keyur", city: "Dindoli" },
    ]

    return (
        <Table striped bordered hover border="10px" varient="danger">


            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>City</th>
                </tr>
            </thead>
            {
                data.map((callback) =>
                    
                        <tbody>
                            <tr>
                                <td>{callback.id}</td>
                                <td>{callback.name}</td>
                                <td>{callback.city}</td>
                            </tr>
                        </tbody>
                )
            }
        </Table>
    );
}
export default Tables;