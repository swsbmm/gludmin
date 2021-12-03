

const inMemoryJWTManager = () => {

    let inMemoryJWT: string = "";

    const getToken = () => inMemoryJWT;
 

    const setToken = (token: string) => {
        console.info("setToken: "+token);
        inMemoryJWT = token;
        return true;
    };
    const eraseToken = ():boolean => {
        inMemoryJWT = "";
        return true;
    }

    const isAuthenticated = (): boolean  => {
        return (inMemoryJWT.length === 0) ? false : true;
    }

    return {
        eraseToken,
        getToken,
        setToken,
        isAuthenticated
    }
};

export default inMemoryJWTManager();