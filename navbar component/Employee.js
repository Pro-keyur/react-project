import { Link } from "react-router-dom";
function Employee()
{
    return(
        <div>
            <h1>Employee Page</h1>
            <ul>
                <Link to='Employee/one'>Employee one</Link> &nbsp; &nbsp; 
                <Link to='Employee/two'>Employee two</Link> &nbsp; &nbsp;
            </ul>
        </div>
    )
}

export default Employee;