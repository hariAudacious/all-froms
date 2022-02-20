import React,{useState} from 'react';

const Hariom = () => {
    const [username, setUsername] = useState({});

const handleChange =(event)=>{
        // console.log(event.target.value)
        // console.log(event.target.name)
        const value = event.target.value
        const name = event.target.name
        setUsername({...username, [name] : value})
}
   

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(username);
        // alert("Hiii")
    } 
  return <div>
  <center>
      <form onSubmit={handleSubmit}>
          <input type="text"
           name='fname'
           value={username.fname}
           onChange={handleChange} 
           placeholder='Enter First Name' 
       /><br/><br/>

          <input type="text" 
          name='lname'
          value={username.lname}
          onChange={handleChange} 
          placeholder='Enter Last Name' 
        /><br/><br/> 
        
        <input type="email" 
          name='email'
          value={username.email}
          onChange={handleChange} 
          placeholder='Enter Your mail id' 
        /><br/><br/>
          <button>Submit</button>
      </form>
   </center>   
  </div>;
};

export default Hariom;


// [{user1},{user2},......]