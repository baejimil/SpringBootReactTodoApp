import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { AuthContext, useAuth } from "./security/AuthContext";

export default function LoginComponent(){

    const [username, setUsername] = useState("baejimeel")
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth();

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
       setPassword(event.target.value);
   }

    function handleSubmit(){
       if(authContext.login(username, password)){        
        navigate(`/welcome/${username}`);
       }else{
        setShowErrorMessage(true);
    }
}

//    function SuccessMessageComponent(){
//         if(showSuccessMessage){    
//             return <div className="successMessage">Authenticated Successful!</div>
            
//         }else{
//             return null;
//         }
//     }
    
//     function ErrorMessageComponent(){
//         if(showErrorMessage){
//             return <div className="errorMessage">Authenticated Failed. Plz Check your credential.</div>
//         }
//         return null;
//     }

    return(
        <div className="Login">
            <h1>Login Page!</h1>
            <div className="LoginForm">  
            {/* <SuccessMessageComponent />
            <ErrorMessageComponent /> */}
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Plz Check your credential.</div>}
                <label>User Name: </label>
                <input type="text" name="username" defaultValue={username} onChange={handleUsernameChange}/>
            </div>

            <div className="LoginForm">
                <label>Password: </label>
                <input type="password" name="password" defaultValue={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button type="button" onClick={handleSubmit} name="login">login</button>
            </div>
        </div>
    )
}

