import React,{useState} from 'react';

const TwoInput = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameNew, setFirstNameNew] = useState("");
    const [secondName, setSecondName] = useState("");
    const [secondNameNew, setSecondNameNew] = useState("");
    const handleSubmit = (event)=>{
        // alert("Runed")
        event.preventDefault();
        setFirstNameNew(firstName)
        setSecondNameNew(secondName)
    }
return <>
<center>
<form onSubmit={handleSubmit}>
<input type="text" placeholder='Input First Name' onChange={(e)=>setFirstName(e.target.value)} /><br/><br/>
<input type="text" placeholder='Input Last Name' onChange={(e)=>setSecondName(e.target.value)}/><br/><br/>
<button type='submit'>Submit</button>
</form>
<h1> {firstNameNew}  {secondNameNew}</h1>
</center>
</>;
};

export default TwoInput;
