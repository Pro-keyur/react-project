import React,{useState} from "react";

function Session()
{
    const [value,setValue]=useState();

    function updateData()
    {
        sessionStorage.setItem('data','keyur');
    }

    function RemoveData()
    {
        sessionStorage.removeItem('data');
    }

    return(
        <div>
            <h1>session-Storage</h1>
            <h1>{value}</h1>
            <button onClick={updateData}>setValue</button>
            <button onClick={RemoveData}>removevalue</button>
        </div>
    )
}

export default Session;