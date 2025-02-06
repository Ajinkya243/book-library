import { useState, useEffect } from "react";
const Books=()=>{
    const[data,setData]=useState();
    const[error,setError]=useState();
    const[loading,setLoading]=useState(false);
    const[message,setMessage]=useState();

    const handleDelete=async (id)=>{
        const resp=await fetch(`https://book-database-api.vercel.app/books/${id}`,{
            method:"DELETE"
        });
        if(!resp.ok){
            throw "Failed to Delete."
        }
        else{
            setMessage("Book deleted sucessfully.")
            window.location.reload();
        }
    }
    useEffect(()=>{
        setLoading(true)
    fetch("https://book-database-api.vercel.app/books").then(resp=>resp.json()).then(resp=>{setLoading(false);setData(resp)}).catch(error=>setError(error.message));
    },[])

    return(
        <>
        <h1>List Of Books</h1>
        {loading && <p>Loading.....</p>}
        {message && <p>{message}</p>}
        <ul>
            {data && data.map(el=>(
                <li key={el._id}>{el.title}  {" "}<button onClick={()=>handleDelete(el._id)}>Delete</button></li>
            ))}
        </ul>
        
        </>
    )
}
export default Books;