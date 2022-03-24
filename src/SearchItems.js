import React from "react";

export default function SearchItems({ search , setSearch}){
return(
  <>
        <input className="search-input" 
        placeholder="Search here"
        onChange={(e)=>(setSearch(e.target.value))}
        value = {search}
        />
      </>
)
}