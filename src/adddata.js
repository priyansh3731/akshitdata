import axios from "axios";
import * as XLSX from "xlsx";

export const Add=()=>{


    const addHandler=(event)=>{
        console.log("hello")
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
      data.map((data)=>(axios.post("http://localhost:80/akshitapi/",data)))
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