import React from 'react';
const handleClick = (event) =>{
    let NameCheacker = event.target.name
    // console.log(NameCheacker)
    let Str = "Hariom"
if (NameCheacker=="UpperCase") {
    console.log(Str.toUpperCase());
} else if (NameCheacker=="LowerCase"){
    console.log(Str.toLowerCase());
    
}else{
    console.log(Str.length);

}}
const Buttons = () => {
  return <div>
      <button onClick={handleClick} name='UpperCase'>UpperCase</button>
      <button onClick={handleClick} name='LowerCase'>LowerCase</button>
      <button onClick={handleClick} name='Length'>Length</button>
  </div>;
};

export default Buttons;
