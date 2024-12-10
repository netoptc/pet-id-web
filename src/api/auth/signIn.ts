import api from "../api";

export function signIn(email: string, password: string) {
    const data = {
        email: email,
        password: password,
    }
    
    api.post('/owners/login', data)
        .then((resp) => {
            console.log(resp)
        })
        .catch((err) => {
            console.log(err);
        })
} 
