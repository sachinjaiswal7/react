import React from "react";

export default function ItemList({item,checkHandler,deleteHandler}){
    return(
        <li className="listItem" >
                     <input
                     onChange={()=>checkHandler(item.id)}
                     type="checkbox"
                     
                     checked = {item.checked}
                     />
                     <div className="title-and-delete">
                     <label style = {{color:"black"}}>{item.item} </label>
                      <button onClick={()=>deleteHandler(item.id)}>X</button>
                      </div>
                      
                 </li>
    )
}