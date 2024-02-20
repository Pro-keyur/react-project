import React,{useRef} from "react";

function Localstorage()
{
    const name=useRef();

    const run=()=>
    {
        console.log(name.current.value);
        localStorage.setItem("initial value",name.current.value);
    }
    console.log(localStorage.getItem("initial value","*****"))

    return(
        <div>
            <h1>keyur</h1>
            <br/>
            <input type='text' ref={name}></input> <br/><br/>
            <button onClick={run}>click</button>
        </div>
    )

}

export default Localstorage;