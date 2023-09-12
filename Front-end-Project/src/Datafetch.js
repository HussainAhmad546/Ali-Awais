import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function DataList() {
    const [data, setData] = useState([]);
    
   const fetchData= async()=>{
    const response= await fetch(
        'http://localhost:4000/home'
    );
   const json = await response.json();

   setData(json);
};
useEffect(() => {
    fetchData()
}, []) 
// const finalArray= data.concat(arr)
    return (
        <div>
            {data.map((item) => {
                return (
                    <div style={{ border: '2px solid pink', display:'flex', justifyContent:'space-evenly'}}>
                        <div style={{ border: '2px solid red'}}>
                            <p>{item.id}</p>
                            <p>{item.title}</p>
                            <p>{item.Author}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );

}

export default DataList