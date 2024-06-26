export const saveToken = (token: any) => {
    
    localStorage.setItem('token', token?.token);
    localStorage.setItem('expiration', JSON.stringify(token?.expiration));
    
    return token;
}