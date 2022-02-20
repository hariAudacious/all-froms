import { useState } from "react";



const State = () => {
    const  [count, setCount] = useState(0);
    // console.log(useState);

    let HandleClick = () =>{
    setCount(count+1)
    }
    
    let HandleClickm = () =>{
        setCount(count-1)
        }
   return <div>
   <center>
      <h1>Hii It is my use state Component</h1>
      <h1>{count}</h1>
      <button onClick={HandleClickm}>Click Me For -</button>
      <button onClick={HandleClick}>Click Me For +</button>
   </center>
  </div>;
};

export default State;
