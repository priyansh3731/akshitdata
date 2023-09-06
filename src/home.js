import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "./datacontext"
import axios from "axios";

export const Home=()=>{

    const {setdata} = useContext(DataContext)

    const dataHandler=async()=>{
        const res = await axios.get("https://databases.000webhost.com/akshitapi/")
        setdata(res.data)
    }

    useEffect(()=>{dataHandler()},[])

    return(
        <div>
            <Link to={"/adddata"}>add data</Link>
            <br />
            <Link to={"/scan"}>scan</Link>
        </div>
    )
}