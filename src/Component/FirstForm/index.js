import React,{useState} from 'react';



const Myform = () => {
const [name,setName] = useState("")
const [fullname, setFullname] = useState("");
const handleChange = (event)=> {
   setName(event.target.value);
}
const handleCick = () =>{
   setFullname(name)
}
  return(
   <div>
   <center>
         <h1>Hello {fullname}</h1>
         <input type="text" onChange={handleChange} value={name}/>
         <button onClick={handleCick}>Submit</button>
  </center>
  </div>
  )};

export default Myform;
