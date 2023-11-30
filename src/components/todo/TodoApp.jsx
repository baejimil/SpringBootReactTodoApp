import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './TodoApp.css';
import LogoutComponent from './LogoutComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComponent from './LoginComponent';
import Authprovider, { useAuth } from './security/AuthContext';
import TodoComponent from './TodoComponent';

function AuthenticatedRoute({children}){
    const authContext = useAuth();
    if(authContext.isAuthenticated)
        return children
    return <Navigate to="/" />
}

export default function TodoApp(){

    return(
        <div className="TodoApp">
            <Authprovider>
                <BrowserRouter>
                    <HeaderComponent />
                    <Routes>                    
                        <Route path='/' element={<LoginComponent></LoginComponent>} />    
                        <Route path='/login' element={<LoginComponent></LoginComponent>} />    

                        <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                <WelcomeComponent></WelcomeComponent>
                            </AuthenticatedRoute>
                        } />                    
                        <Route path='/todos' element={
                            <AuthenticatedRoute>
                                <ListTodosComponent></ListTodosComponent>
                            </AuthenticatedRoute>
                        } />

                        <Route path='/todo/:id' element={
                            <AuthenticatedRoute>
                                <TodoComponent></TodoComponent>
                            </AuthenticatedRoute>
                        } />

                        <Route path='/logout' element={
                            <AuthenticatedRoute>
                                <LogoutComponent/>
                            </AuthenticatedRoute>
                        } />        

                        <Route path='*' element={<ErrorComponent></ErrorComponent>} />                            
                    </Routes>
                </BrowserRouter>            
            </Authprovider>
        </div>
    )
}

