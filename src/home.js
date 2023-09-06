import { Link } from "react-router-dom"

export const Home=()=>{
    return(
        <div>
            <Link to={"/adddata"}>add data</Link>
            <br />
            <Link to={"/scan"}>scan</Link>
        </div>
    )
}