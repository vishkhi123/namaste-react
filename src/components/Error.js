
import { useRouteError } from "react-router-dom";

const Error=()=>{

    const err=useRouteError();

    console.log(err);

    return(
       <h4>{err.status}</h4>
    )



}
export default Error;