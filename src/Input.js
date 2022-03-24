import React,{ useState , useRef} from "react";



export default function Input({items,addHandler}){
    let [input,setInput] = useState("")
    let inputRef = useRef();
    
    return(
        <div className="input-newitem">
          <input className="adder" type="text"
          autoFocus
          ref={inputRef}
          onChange={(e)=>{
              let newInput = input;
              newInput =e.target.value;
              setInput(newInput)
              
            }}
            value={input}
           />
           <button onClick={()=>{addHandler(input); 
             setInput(""); 
             inputRef.current.focus();
             }} className="add-btn">Add</button>
        </div>
    )
}