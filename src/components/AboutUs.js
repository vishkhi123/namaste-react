import Header from "./Header";
import User from "./User";
import UserClass from "./UserClass";
 import UserContext from "./utils/UserContext";

const AboutUs=()=>{

    return(

        <>
        <div>
            Logged In :
            <UserContext.Consumer>
                {({loggedInUser})=><h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
        </div>
            
            <h1>About US</h1>

            <h2>HIIII THERE I AM FULL STACK DEVELOPER</h2>

            <User  name={"Vishal"}/>
            <hr/>
            <UserClass name={"Vishal Khiratkar"}/>
        </>

    )


}
export default AboutUs;