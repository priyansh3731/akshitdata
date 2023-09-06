import { useContext, useEffect, useState } from "react"
import { Html5QrcodeScanner } from "html5-qrcode";
import { DataContext } from "./datacontext";
import { Link, json } from "react-router-dom";
import JSZip from "jszip";
import JSZipUtils from 'jszip';
import saveAs from "jszip";


export const Scan=()=>{

    const {data,demo,setdemo} = useContext(DataContext)
    const [demoid,setdemoid] = useState(null)


    const changeHandler=(e)=>{
        const repo4 = data.filter((data)=>data.awb===e.target.value)
        setdemo(repo4[0])
    }

    const downloadHandler=()=>{
        console.log("hello")

    }

    useEffect(()=>{
        const scanner = new Html5QrcodeScanner("reader",{qrbox:{width:250,height:250},fps:5,});
        scanner.render(success,error);

        function success(result){
            scanner.clear();
            setdemoid(result);
            const repo = (data.filter((data)=>data.awb===result))
            setdemo(repo[0])
        }
    
        function error(err){
            console.warn(err)
        }
    },[])

    return(
        <div>
            {
                demoid ? <div>{demoid}</div> : <div id="reader"></div>
            }
            {
                demo ? 
                        <div>
                           {demo.awb}
                           <Link to={"/edit"}>edit</Link>
                           <button onClick={downloadHandler}>download</button>
                        </div>
                    
                 : ""
            }
            <div>
                <label>search</label>
                <input type="text" onChange={changeHandler} />
            </div>
        </div>
    )
}