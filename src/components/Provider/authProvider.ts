import inMemoryJWT from './inMemoryJwt';

type credentials = {
    username : string,
    password : string
}

const authProvider = {
    login: ({ username, password }: credentials) => {
        const request = new Request('https://auth.glud.org/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email: username, password: password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({jwt_token}) => {
                inMemoryJWT.setToken(jwt_token);
                return Promise.resolve();
            })
            .catch(() => {
                throw new Error('Error, verifique credenciales')
            });
    },
    logout: () => {
        inMemoryJWT.eraseToken();
        return Promise.resolve('/login');
    },

    checkAuth: () => {
        return inMemoryJWT.isAuthenticated() ? Promise.resolve() : Promise.reject();
    },

    checkError: (error:any) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            inMemoryJWT.eraseToken();
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
    },
};

export default authProvider;
