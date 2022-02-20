import React,{useState} from 'react';

const Array = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState([]);
    // console.log(name);
    const HandleClick = () =>{
       let nameArr = [...fullName , name]
        setFullName(nameArr)

        setName("")
        localStorage.setItem("new-name",nameArr)
     
        
    }
//    console.log( localStorage.getItem("Roshni"));
        // localStorage.setItem("Aarti","panchal")

return <div>
      {/* it is Array Components */}
      <center>
      <input type="text" value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' /><br/><br/>
      <button type="button"   onClick={HandleClick}>Submit</button>
      </center>
  </div>;
};

export default Array;
