export function getUser() {
    return localStorage.getItem('token')
}
export function setUser(dado){
    localStorage.setItem('Token',JSON.stringify(dado.accessToken))
}

export function clearUser(){
    localStorage.clear()
}