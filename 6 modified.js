App.js
import SimpleForm from './SimpleForm';
import './App.css';
const App=()=>{
return(
<div>
<SimpleForm/>
</div>
);
}
export default App;

SimpleForm.js
import { useState } from "react";
const SimpleForm=()=>{
const [name,setName] = useState('');
const [email,setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [error, setError] = useState('');
const handleSubmit = (e)=>{
e.preventDefault();
if(!name || !email.includes('@') || password.length<6){
setError('Please Enter the Valid User Credentials');
}else{
setError(' ');

alert("Submitted",{name,email,password});
}
};

return(
<form onSubmit={handleSubmit} className="App">
<input type="text" value={name} placeholder="Name" onChange=
{(e)=>setName(e.target.value)}/><br/>
<input type="email" value={email} placeholder="Email" onChange=
{(e)=>setEmail(e.target.value)}/><br/>
<input type={showPassword?"text":"password"} placeholder="Password" value={password}
onChange={(e)=>setPassword(e.target.value)}/>
<button type="button" onClick={()=>setShowPassword(!showPassword)}>
{showPassword?"Hide":"Show"}
</button><br/>
{error && <p style={{color:'red'}}>{error}</p>}
<button type="submit">Submit</button>
</form>
)
}
export default SimpleForm;
