import React from "react";

function Map()
{
    let arr=[
        {name : "keyur", occupassion : "Intraday trader"},
        {name : "pankaj", occupassion : "web-developer"},
        {name : "aalok", occupassion : "football player"}];

    return (
        <div>
            {
                arr.map((items)=>(
                   <table>
                        <tr>
                            <td> <h1 key={items}> Name : {items.name[0]} occupassion : {items.occupassion[0]}</h1></td>
                            <td> <h1 key={items}> Name : {items.name[1]} occupassion : {items.occupassion[1]}</h1></td>
                            <td> <h1 key={items}> Name : {items.name[2]}  occupassion : {items.occupassion[2]}</h1></td>
                        </tr>
                   </table>
                    
                ))
            }


        </div>
    )


}

export default Map;

