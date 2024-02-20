import React from "react";
import { useState } from "react";

function List()
{

    const [err,seterr]=useState(false)
    // const [pwd,setpwd]=usestate()

    function getData(e)
    {
        e.preventDefault();
    }

    function userData(e)
    {
        let list=e.target.value;

        if(list.length<3)
        {
            seterr(true);
        }
        else
        {
            seterr(false);
        }
    }

    // function pwdData(e)
    // {
    //     let pwd=e.target.value;
    //     let length=e.target.value.length;
    //     let check=0;
    //     let i;

    //     if(length>=8 && length<=32)
    //     {
    //         for(i=1;i<=length;i++)
    //         {
    //             if((pwd[i]>="A" || pwd[i]<="Z"))
    //             {
    //                 check==1;
    //             }
    //         }
    //         if(check==1)
    //         {
    //             check==0;
    //             for(i=1;i<=length;i++)
    //         {
    //             if((pwd[i]>="a" || pwd[i]<="z"))
    //             {
    //                return 1;
    //             }
    //         }
    //         }
    //     }
    // }




    return(
        <div>
            <form onSubmit={getData}>
                <h1>Studen list</h1>
                <input type="text" placeholder="Enter name here" onChange={userData}></input>{err?<span>invalid username</span>:""}
                <br/> <br/>
                <input type="password" placeholder="Enter password here"></input>
                <br/> <br/>
                <button>submit</button>
            </form>
        </div>
    )
}

export default List;