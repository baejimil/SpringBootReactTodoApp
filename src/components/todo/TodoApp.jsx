import { useState } from "react"
import {BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom';
import './TodoApp.css';

export default function TodoApp(){

    return(
        <div className="TodoApp">
            <BrowserRouter>
                <HeaderComponent />
                <Routes>                    
                    <Route path='/' element={<LoginComponent></LoginComponent>} />    
                    <Route path='/login' element={<LoginComponent></LoginComponent>} />    
                    <Route path='/welcome/:username' element={<WelcomeComponent></WelcomeComponent>} />                    
                    <Route path='/todos' element={<ListTodosComponent></ListTodosComponent>} />
                    <Route path='/logout' element={<LogoutComponent/>} />        
                    <Route path='*' element={<ErrorComponent></ErrorComponent>} />                            
                </Routes>
                <FooterComponent />
            </BrowserRouter>            
        </div>
    )
}

function LoginComponent(){

    const [username, setUsername] = useState("baejimeel")
    const [password, setPassword] = useState('')
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const navigate = useNavigate();

    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

   function handlePasswordChange(event){
       setPassword(event.target.value);
   }

   function handleSubmit(){
       if(username==="baejimeel" && password==='1234'){
        setShowSuccessMessage(true);
        setShowErrorMessage(false);   
        navigate(`/welcome/${username}`);
       }else{
        console.log('Failed');
        setShowSuccessMessage(false);
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
            {showSuccessMessage && <div className="successMessage">Authenticated Successful!</div>}
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

function WelcomeComponent(){
    const {username} = useParams();
    console.log(username);

    return(
        <div className="Welcome">
            <h1>Welcome {username}!</h1>
            <div>
                Manage your Todos - <Link to="/todos">Go here!</Link>
            </div>
        </div>
    )
}

function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1> We are working really hard! </h1>
            <div>
                Apologies for the 404.
            </div>
        </div>
    )
}

function ListTodosComponent(){
    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
                    {id: 2, description: 'Learn JAVA', done: false, targetDate: targetDate},
                    {id: 3, description: 'Learn PYTHON', done: false, targetDate: targetDate}                
    ]

    return(
        <div className="container">
            <h1> Things You want to do ! </h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Description</td>
                            <td>is done?</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>  
                    <tbody>
                        {
                            todos.map(
                                todo =>(
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }                        
                    </tbody>  
                </table> 
            </div>
        </div>
    )
}

function HeaderComponent(){
    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="/welcome/baejimeel">baejimeel</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/baejimeel">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

function FooterComponent(){
    return(
        <footer className="footer">
            <div className="container">
                Footer 
            </div>
        </footer>
    )
}

function LogoutComponent(){
    return(
        <div className="LogoutComponent">
            <h1> You are logged out! </h1>
            <div>
                Thank you for our App.
            </div>
        </div>
    )
}