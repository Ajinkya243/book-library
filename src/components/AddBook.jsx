import { useState } from "react";

const AddBook=()=>{
    const[formData,setFormData]=useState({});

    const handleChange=(event)=>{
        const{name,value}=event.target;
        setFormData(prev=>({...prev,[name]:name==="inputPublishedYear" || name==="inputRating"?parseInt(value):value}))
    }


    const handleSubmit=async (event)=>{
        event.preventDefault();
        try{
            const resp=await fetch("https://book-database-api.vercel.app/books",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            })
            if(!resp.ok){
                throw Error("Error occur while adding!")
            }else{
                window.location.reload();
            }

        }
        catch(error){

        }
    }
    return(
        <>
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputTitle">Title:</label><br/>
            <input type="text" id="inputTitle" name="title" value={formData.title} onChange={handleChange} /> <br /><br />
            <label htmlFor="inputAuthor">Author:</label> <br />
            <input type="text" id="inputAuthor" name="author" value={formData.author} onChange={handleChange} /> <br /><br />
            <label htmlFor="inputPublishedYear">Published Year:</label> <br />
            <input type="number" id="inputPublishedYear" name="publishedYear" value={formData.publishedYear} onChange={handleChange} /> <br /><br />
            <label htmlFor="inputGenre">Genre:</label> <br />
            <input type="text" id="inputGenre" name="genre" value={formData.genre} onChange={handleChange} /> <br /> <br />
            <label htmlFor="inputLanguage">Language:</label> <br />
            <input type="text" id="inputLanguage" name="language" value={formData.language} onChange={handleChange}/> <br /> <br />
            <label htmlFor="inputCountry">Country:</label> <br />
            <input type="text" id="inputCountry" name="country" value={formData.country} onChange={handleChange}/> <br /> <br />
            <label htmlFor="inputRating">Rating:</label> <br />
            <input type="number" id="inputRating" name="rating" value={formData.rating} onChange={handleChange} /> <br /> <br />
            <label htmlFor="inputSummary">Summary:</label> <br />
            <input type="text" name="summary" id="inputSummary" value={formData.summary} onChange={handleChange}/> <br /> <br />
            <label htmlFor="inputCoverImage">Cover Image url:</label> <br />
            <input type="text" name="coverImageUrl" id="inputCoverImage" value={formData.coverImageUrl} onChange={handleChange}/> <br /> <br />
            <input type="submit" value="Submit" />
        </form>
        </>
    )
}
export default AddBook;