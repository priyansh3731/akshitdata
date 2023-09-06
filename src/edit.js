import { useContext, useState } from "react"
import { DataContext } from "./datacontext"
import axios from "axios"



export const Edit=()=>{

    const {demo} = useContext(DataContext)

    const submitHandler=async(e)=>{
        e.preventDefault();

        const photo1 = e.target[0].files[0];

        const photo2 = e.target[1].files[0];

        const video = e.target[2].files[0];

        const res = {...demo,photo1:btoa(JSON.stringify(URL.createObjectURL(photo1))),photo2:btoa(JSON.stringify(URL.createObjectURL(photo2))),video:btoa(JSON.stringify(URL.createObjectURL(video)))}

        axios.put("http://localhost:80/akshitapi/",res)
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>photo1</label>
                <input type="file" required />

                <label>photo2</label>
                <input type="file" required />

                <label>video</label>
                <input type="file" required />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}