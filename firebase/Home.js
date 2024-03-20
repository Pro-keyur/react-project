import React from "react";

function Home()
{
    const logout=()=>{
        localStorage.clear();
        window.location.reload();
    }

    return(
        <div>
            <h1>Home page</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Home;