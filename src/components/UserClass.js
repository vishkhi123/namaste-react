import React from "react";

class UserClass extends React.Component {
    constructor(props)
    {
        super(props);

        this.state={
            count:0,
            count2:12,
            count3:0,
            count4:0,
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
    }

    async componentDidMount()
    {
        const data=await fetch("https://api.github.com/users/vishkhi123");
        const json=await data.json();
       console.log("Fetched Successfull")
        console.log(json);

        this.setState({
            userInfo:json,
        });
    }


  render() {

    const{name,location,avatar_url}=this.state.userInfo;

    return (
      <div className="user-card">
    <img className="m-2 w-auto h-auto" src={avatar_url}></img>
    <h3>Name : {name}</h3>
    <h3>Location : {location}</h3>


      <hr></hr>
      
        <h2>Name :{this.props.name}</h2>
        <h3>Location:Dehradun</h3>
        <h4>Contact:@akshaymarch7</h4>
        <h4>Count :{this.state.count}</h4>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1,
            })
        }} >Click Me</button>
        <h4>Count :{this.state.count2}</h4>
      </div>
    );
  }
}
export default UserClass;
