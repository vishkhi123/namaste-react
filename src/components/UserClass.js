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
        }

    }


  render() {
    return (
      <div className="user-card">
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
