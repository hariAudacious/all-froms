import Myform from "./Component/FirstForm";
import State from "./Component/useState";
import Converter from "./Component/Converter";
import 'antd/dist/antd.css' 
import String from "./Component/sigle-input-string";
import Array from "./Component/array-input-form";
import TwoInput from "./Component/Two-Input-String";
import Obj from "./Component/Two-Input-Obj";
import Hariom from "./Component/Two-input-arr-obj";
import Buttons from "./Component/Multiple-button";
import Testing from "./Component/testing-Converter";

function App() {
  return (
    <div >
    <String/>         {/* "hariom" */}
    {/* <Array/> */}         {/*  ["hariom","Dolly","Aarti"]*  /}
    {/* <TwoInput/> */} 
    {/* <Obj/>                        {fname:"hariom",lname:"sharma"} */}
    {/*<Myform/>*/}        {/*[{fname:"hariom",lname:"sharma"},{fname:"Sunil",lname:"yadav"}]*/}
    {/* <State/> */}
    {/* <Converter/> */}
    {/* <Buttons/> */}
    {/* <Testing/> */}
    </div>
  );
}

export default App;
