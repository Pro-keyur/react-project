import React,{createRef} from "react";

class Keyur extends React.Component
{
    constructor()
    {
        super();
        this.inputRef=createRef();
    }
    getvalue()
    {
        console.warn("function calling");
        this.inputRef.current.value="keyur";
        this.inputRef.current.style.color="green";
        this.inputRef.current.style.backgroundColor="red";
    }
    render()
    {
        return(
            <div className="App">
                <h1>Ref in class</h1>
                <input type='text' ref={this.inputRef}></input>
                <button onClick={()=>this.getvalue()}>Update</button>
            </div>
        )
    }
}

export default Keyur;