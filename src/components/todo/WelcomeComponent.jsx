import {useParams, Link} from 'react-router-dom';
import { useState } from 'react';
import {retrieveHelloWorldUsername} from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext';

export default function WelcomeComponent(){
    const {username} = useParams();

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi() {
        console.log('hello')
        

    // axios.get('http://localhost:8080/hello-world')
    //     .then( (response) => successfulResponse(response) )
    //     .catch( (error) => errorResponse(error) )
    //     .finally( () => console.log('cleanup'))

    // retrieveHelloWorldBean()
    //     .then( (response) => successfulResponse(response) )
    //     .catch( (error) => errorResponse(error) )
    //     .finally( () => console.log('cleanup'))

        retrieveHelloWorldUsername(username, authContext.token)
            .then( (response) => successfulResponse(response) )
            .catch( (error) => errorResponse(error) )
            .finally( () => console.log('cleanup'))

    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="Welcome">
            <h1>Welcome {username}!</h1>
            <div>
                Manage your Todos - <Link to="/todos">Go here!</Link>
            </div>
            <div>
                <button className="btn btn-success" onClick={callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

