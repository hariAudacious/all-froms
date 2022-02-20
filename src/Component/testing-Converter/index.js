import React,{useState} from 'react';
import { Button,Input,Modal } from 'antd';
import styles from "./style.module.css"

const Testing = () => {
   
        const [name,setName] = useState("")
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [perameter1,setPerameter1] = useState("")
        const [perameter2,setPerameter2] = useState("")
        
        // console.log(perameter1,perameter2);
        // console.log(perameter2);
        
        const HandleClick = (event) =>{
            let NameCheacker = event.target.name
        if (NameCheacker=="UpperCase") {
            setName(name.toUpperCase());
        } else if (NameCheacker=="LowerCase"){
            setName(name.toLowerCase());
            
        }else if (NameCheacker=="CharAt"){
            setIsModalVisible(true);
        }}
        // setName(name.trim());
        

        
          const handleOk = () => {
              let CharAt = name.charAt(perameter1)
                  setName(CharAt)
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
              <div><button type="primary" name='UpperCase'  onClick={HandleClick}>UpperCase</button></div>
              <div><button type="primary" name='LowerCase' onClick={HandleClick}>LowerCase</button></div>
              <div><button type="primary" name='Trim' onClick={HandleClick}>Trim</button></div>
        {/*-------------------------------- INPUT BUTTONS-------------------------------------------  */}
              <div><button type="primary" name='CharAt'  onClick={HandleClick}>chatacterAt</button></div>
              <Modal title="Slice"   entered visible={isModalVisible} className={styles.modal} onOk={handleOk} onCancel={handleCancel}>
                 From Where  :-  <input  value={perameter1} onChange={(e)=> setPerameter1(e.target.value) } /><br/><br/>
              </Modal>
          </div>
        
        
        {/*--------------------------------2 INPUT BUTTONS-------------------------------------------  */}
              <div>
        
            
              </div>
          </div>;
};

export default Testing;
