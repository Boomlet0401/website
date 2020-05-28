class RolesManager {

    constructor() {
        let rolesString = localStorage.getItem("roles");
        if (rolesString != null) {
            this.authenticated = true;
            this.roles = rolesString.split(",");
        } else {
            this.authenticated = false;
            this.roles = [];
        }
    }

    isAuthenticated() {
        return this.authenticated;
    }

    isClient() {
        return this.roles.indexOf("client") > -1;
    }


}

export default new RolesManager();