import { Link } from "react-router-dom";

function Navbar()
{
    return(
        <div>
            <Link to='/Home'>Home</Link> &nbsp;|&nbsp; 
            <Link to='/About'>About</Link>&nbsp;|&nbsp; 
            <Link to='/Employee'>Employee</Link>&nbsp;|&nbsp; 
            <Link to='/Page404'>Page 404</Link>&nbsp;|&nbsp; 
        </div>
    )
}

export default Navbar;