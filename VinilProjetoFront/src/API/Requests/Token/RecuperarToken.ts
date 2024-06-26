export const RecuperarToken = (): any => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    //console.log("token:"+ token)
    return token;
  }
};
  