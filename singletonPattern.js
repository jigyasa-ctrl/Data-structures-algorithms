class Auth{
    static instance = null;
    constructor() {
        if(Auth.instance){
            return Auth.instance
        }
        this.token = ""
        Auth.instance = this;
        
    }
    
    login(token){
        this.token = token
    }
    
    getToken() {
        return this.token
    }
    
    
}

const Auth1 = new Auth()

const Auth2 = new Auth()
Auth1.login("abcd")
console.log(Auth1.getToken())
console.log(Auth2.getToken())
