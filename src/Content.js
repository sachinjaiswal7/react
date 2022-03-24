import React,{ useState } from "react";
import ItemList from "./ItemList";

export default function Content({items,checkHandler,deleteHandler}){
   

    return(
        
        <main>
            {items.length ? (
            <ul>
            {items.map((item)=>(
               
                <ItemList item={item}
                checkHandler = {checkHandler}
                deleteHandler = {deleteHandler}
                key = {item.id}
                />
               
            ))}
            </ul>
            ):(<p style={{marginTop:"2rem",textAlign:"center"}}>Fuck you </p>)}

        </main>
    )
}