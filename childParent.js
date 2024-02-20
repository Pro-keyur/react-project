import React from "react";

function Cols(props)
{

  const {name,getData}=props;

    return(
         <React.Fragment>
            <h1>keyur : {props.name}</h1>
            <button onClick={getData}>Alternate</button>
         </React.Fragment>
    )

}

export default Cols;