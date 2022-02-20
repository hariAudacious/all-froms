import React,{useState} from 'react';
import styles from "./style.module.css"
import { Button,Input,Modal } from 'antd';

// const { TextArea } = Input;
const Converter = () => {
const [name,setName] = useState("")
const [isModalVisible, setIsModalVisible] = useState(false);
const [perameter1,setPerameter1] = useState("")
const [perameter2,setPerameter2] = useState("")

// console.log(perameter1,perameter2);
// console.log(perameter2);

const  HandleUpper = () =>{
       let upperChange = name.toUpperCase()
    setName(upperChange);
    }
 
const HandleLower = () =>{
    let lowerChange = name.toLowerCase()
    setName(lowerChange)
}
const HandleTrim = () =>{
    let trimChange = name.trim()
    setName(trimChange)
}

const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {

  let slice = name.slice(perameter1,perameter2)
      setName(slice)
  
  // let substring =name.substring(perameter1,perameter2)
  //     setName(substring)

    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return <div className={styles.Container}>
       <div className={styles.summary}>
            <h2>Your Text Summary</h2>
        <p> {name.length} chatacters and {name.split(" ").length} words</p>
        <p> {0.008 * name.split(" ").length} Minutes will take for Read</p>
        </div>
      <input type="textarea" onChange={(e)=>setName(e.target.value)} value={name} className={styles.mytextarea} placeholder='Enter a String' />
      {/* <TextArea rows={3} cols={1}/> */}
      <div className={styles.btn}>      
      <div><Button type="primary"  onClick={HandleUpper}>UpperCase</Button></div>
      <div><Button type="primary"  onClick={HandleLower}>LowerCase</Button></div>
      <div><Button type="primary"  onClick={HandleTrim}>Trim</Button></div>
{/*-------------------------------- INPUT BUTTONS-------------------------------------------  */}
      <div><Button type='primary' onClick={showModal}>chatacterAt</Button></div>


{/*--------------------------------2 INPUT BUTTONS-------------------------------------------  */}
      <div><Button type="primary"  onClick={showModal}>Slice</Button></div>
      <Modal title="Slice"   entered visible={isModalVisible} className={styles.modal} onOk={handleOk} onCancel={handleCancel}>
         From Where  :-  <input type="number" value={perameter1} onChange={(e)=> setPerameter1(e.target.value)} /><br/><br/>
         Till  Where  :-  <input type="number"  value={perameter2}  onChange={(e)=> setPerameter2(e.target.value)} />
      </Modal>
  </div>
      <div>

    
      </div>
  </div>;
};

export default Converter;
