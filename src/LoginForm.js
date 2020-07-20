import React from 'react';

export default class LoginForm extends React.Component{
  constructor(){
    super();
        this.state={
        Username:'',
        Password:''
      }
  }
CheckCreds=()=>{
let count=0;
let isUpperCase=(string)=> /^[A-Z]*$/.test(string);
this.state.Password.trim();
for(let j=0;j<this.state.Password.length;j++){
  let chars=this.state.Password.charAt(j);
  if(isUpperCase(chars)){
    count=count+1;
  }
}

/* if(this.state.Username==="abcd@abcd" && this.state.Password==="abcd" ){*/ 
if(this.state.Username==="Clarion@Clarion.com" && this.state.Password==="Clarion@123"){
      console.log("Authenticated");
      let name=this.state.Username.split('@')[0]; 
      this.props.history.push('/dash',{username:name})
  }else{
    alert("Username Or Password is Not Correct")
  }
}

changeHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value})
}

render(){
return  <div> <form>  
        <div className="container">   
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="Username" onChange={this.changeHandler} required/><br/><br/>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="Password" onChange={this.changeHandler} required/><br/><br/>
            <button type="button" onClick={this.CheckCreds}>Login</button>  
            <button type="button" className="cancelbtn"> Cancel</button>
        </div>   
    </form>    
  </div>
  }
}