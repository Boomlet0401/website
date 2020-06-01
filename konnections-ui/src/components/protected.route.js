import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "./Auth";
import RolesManager from "./RolesManager";

export const ProtectedRoute = ({
    component: Component,
    client: Client,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (Auth.isAuthenticated()) {
                    if (RolesManager.isClient() !== Client) {
                        return (
                            <Redirect
                                to={{
                                    pathname: "/proposals",
                                    state: {
                                        from: props.location
                                    }
                                }}
                            />
                        );
                    }
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

ProtectedRoute.defaultProps = {
    client: false,
    admin: false,
    editor: false,
    publisher: false,
    manager: false,
    all: false,
}
