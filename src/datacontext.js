import { createContext, useContext, useState } from "react"


export const DataContext = createContext();

export const DataContextHandler=({children})=>{
    const [data,setdata] =useState([])
    const [demo,setdemo] = useState(null)
    return(
        <DataContext.Provider value={{data,setdata,demo,setdemo}}>{children}</DataContext.Provider>
    )
}