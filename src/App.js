import SearchItems from './SearchItems';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import React ,{ useState , useEffect} from 'react';
import Input from './Input';


function App() {
  const API_URL ="http://localhost:3500/items"
    const list = []
    const [items,setItems] = useState(list);
    const [search,setSearch] = useState("");
    const [error,setError] = useState(false) 
    // code to setItems and update the local storage 
    const setAndSaveItems = (newList)=>{
      setItems(newList)
      
    }
  // code to check and uncheck the check box of particular item
    const checkHandler = (id)=>{
      const newList = [...items]
    newList.forEach((item,index)=>{
        if(item.id === id)newList[index].checked = !newList[index].checked
    })
     setAndSaveItems(newList);
    }

    //code to delete any item from the list
    const deleteHandler = (id)=>{
      const newList = items.filter((item)=>(item.id!==id))
        
      setAndSaveItems(newList);
    }
    // code to add any item in the list with the help of input which is created inside the Input.js file 
    const addHandler  = (newItem)=>{
      if(!newItem)return;
       let newList = [...items];
       let obj = {
         id:(items.length?items[items.length-1].id+1:1),
         item:newItem,
         checked:false
       }

       newList.push(obj)
       setAndSaveItems(newList);

    }
   useEffect(()=>{
     const fetchItems = async ()=>{
       try{
       const list = await fetch(API_URL)
       if(!list.ok)throw Error("Did not receive");
       const newList = await list.json()
       setItems(newList)
       setError(false)
       }
       catch(err){
         setError(true)
       }
      
     }
     fetchItems()
   },[])


    //return components goes here 
  return (
    <>
    <Navbar/>
    <Input
    items= {items}
    addHandler = {addHandler}/>
    
    <SearchItems
     search = {search}
     setSearch ={setSearch}
    />
    <main>
      {error === true?<p style={{color:"red"}}>Error:did not receive the data</p>:null}
    {error === false ?<Content 
     items= {items.filter((e)=>((e.item.toLowerCase()).includes(search.toLowerCase())))}
     checkHandler = {checkHandler}
     deleteHandler = {deleteHandler}

    />:null}
    </main>
    <Footer/>
    </>
  );
}

export default App;
