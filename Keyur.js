import React from "react";
import { useState } from "react";

function Kb()
{

    const [user,setuser]=useState(false)

    return(
        <div>
            <h1>
            {user?<h1>hello keyur</h1>:<h1>welcome as a guest</h1>}
             </h1>
        </div>
    )

}

export default Kb;