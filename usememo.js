import  React,{ useState,useMemo } from "react";


function Precmemo()
{
    const[count,setCount]=useState(1500);
    const[item,setItem]=useState(1500)

    const Banknifty=useMemo(
        function memo()
        {
            console.warn("memo calling")
            return count*50;
        }
    )

    return(
        <div>
            <h1>Future and Option Selling <br/>( Intraday Trader : Keyur kanpariya)</h1>
            <h2>CE : {count}</h2>
            <h2>PE : {item}</h2>
            <h2>BANKNIFTY : {Banknifty}</h2>
            <button onClick={()=>setCount(count-20)}>CE </button>
            <button onClick={()=>setItem(item-35)}>PE </button>
        </div>
    )

}

export default Precmemo;