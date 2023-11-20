export function setLocalStorage(user) {
    localStorage.setItem('login', JSON.stringify(user));
}

export function getLocalStorage() {
    const json = localStorage.getItem('login');
    
    if(!json){
        return null;
    }

    const user = JSON.parse(json);
    return user ?? null;
}