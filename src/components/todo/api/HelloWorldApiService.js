import { apiClient } from './ApiClient'

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')

// }

export const retrieveHelloWorldBean 
    = () => apiClient.get('http://localhost:8080/hello-world-bean')

export const retrieveHelloWorldUsername 
    = (username, token) => apiClient.get(`http://localhost:8080/hello-world/path-variable/${username}`
    // , {
    //     headers: {
    //         Authorization: token
    //     }
    // }
    )

export const executeBasicAuthenticationService
    = (token) => apiClient.get(`basicauth`, {
        headers: {
            Authorization: token
        }
    })