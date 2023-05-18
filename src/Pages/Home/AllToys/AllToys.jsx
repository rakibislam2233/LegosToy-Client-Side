import { useEffect, useState } from "react";
import AllToyDetails from "./AllToyDetails";

const AllToys = () => {
    const [toy,setToy] = useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/allToy`)
        .then(res=>res.json())
        .then(data=>setToy(data))
    },[])
    console.log(toy);
    return (
        <div className="w-full pt-20 p-5">
        <h3 className="text-4xl text-center font-semibold ">
         All Toys
        </h3>
        {
            toy?.length==0 ?<div className="w-full h-80 flex justify-center items-center"><h2 className="text-5xl font-semibold">No Data Availble</h2></div> :<div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
               toy?.map(singletoy => <AllToyDetails key={singletoy._id} singletoy={singletoy}></AllToyDetails>)
            }
           </div>
        }
        
      </div>
    );
};

export default AllToys;