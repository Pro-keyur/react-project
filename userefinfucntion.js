import React,{useRef} from "react";

function Reffun()
{
    let name=useRef(null);

    function getData()
    {
        console.warn("function calling") 
        name.current.value="keyur";
        name.current.style.color="green";
        name.current.style.backgroundColor="red";                                                 
    }

    return(
        <div>
            <h1>Use ref in function</h1>
            <input type='text' ref={name}></input>
            <br/>
            <button onClick={getData}>Update</button>
        </div>
    )

}

export default Reffun;