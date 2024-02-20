function Crud()
{
    const[name,setName]=useState('');
  const[Alldata,setAllData]=useState([]);
  const[show,setShow]=useState(false)
  const[edit,setEdit]=useState()

  const AddData=()=>{
    if(name.length!==0)
    {
      setAllData(newData=>[...newData,name])
      setName("")
    }
  }

  const handleDelete=(index)=>{
      Alldata.splice(index,1);
      setAllData([...Alldata]);
  }

  const handleEdit=(i)=>{
    setName(Alldata[i]);
    setShow(true);
    setEdit(i);
  }

  const handleUpdate=()=>{
    Alldata.splice(edit,1,name);
    setAllData([...Alldata]);
    setShow(false);
    setName("");
  }





  return(
      <div className="App">
          <h1>CRUD</h1>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
          {!show?<button onClick={AddData}>Add</button>:<button onClick={handleUpdate}>save</button>}
         

          {
            Alldata.map((val,i)=>
            <div>
              <h1>{val}</h1>
              <button onClick={()=>handleEdit(i)}>Edit</button>
              <button onClick={()=>handleDelete(i)}>Delete</button>
            </div>
            )
          }
      </div>

  )

}

export default Crud;