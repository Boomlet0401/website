class Auth {

    constructor() {
        let token = localStorage.getItem("token");
        if (token != null) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        localStorage.removeItem("token");
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

}

export default new Auth();