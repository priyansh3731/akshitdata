import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

export const Add=()=>{

    const navigate = useNavigate();


    const addHandler=(event)=>{
        event.preventDefault();
        const res = {awb:event.target[0].value,firmname:event.target[1].value,quantity:event.target[6].value,rtype:event.target[3].value,sku:event.target[4].value,category:event.target[5].value,suborder_id:event.target[2].value,photo1:"",photo2:"",video:""}
        axios.post("http://localhost:80/akshitapi/",res)
        navigate("/")
    }

    const excelHandler=async(e)=>{
        e.preventDefault();
        const [file] = e.target[0].files;
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      data.map((data)=>(axios.post("https://databases.000webhost.com/akshitapi/",data)))
    navigate("/")
    }
    reader.readAsBinaryString(file);
}


    return(
        <div>
           <form onSubmit={addHandler}>
            <label>AWBNumber</label>
            <input required />

            <label>firm Name</label>
            <input required />

            <label>suborder id</label>
            <input required />

            <label>return type</label>
            <input required />

            <label>sku</label>
            <input required />

            <label>category</label>
            <input required />

            <label>qty</label>
            <input required />

            <button type="submit">submit</button>
           </form>
           <form onSubmit={excelHandler}>
            <label>add excel data</label>
            <input type="file" required />
            <button type="submit">submit</button>
           </form>
        </div>
    )
}