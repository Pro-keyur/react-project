import React from "react";



function Tab()
{

   const arr=["keyur","aalok","rinku","pankaj"]


   return(
    <div>
        {
            arr.map((items)=>
            <h2 key={items}>{items}</h2>
            )
        }
    </div>
   )

}

export default Tab;

{/*
    app.js statement


    const arr=[
    {name:"keyur", age:23, city:"pasodara"},
    {name:"aalok", age:20, city:"ghar"},
    {name:"pankaj", age:23, city:"navagam"},
    {name:"rinku", age:23, city:"kadodara"}
  ]
<div>
{
    arr.map((items)=>
      <User data={items}/>
    )
}
</div>
*/}