export class AuthService{
    TOKEN_NAME : string = "auth-token";   
     getToken() : string{
        return sessionStorage.getItem(this.TOKEN_NAME) == null ? "" : 
        sessionStorage.getItem(this.TOKEN_NAME) ;
    }

    setToken(token : string) {
        sessionStorage.setItem(this.TOKEN_NAME , token);
    }
    
}