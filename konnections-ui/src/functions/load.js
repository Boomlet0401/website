export const requestAPI = (url, method, data) => new Promise((resolve, reject) => {

    if (url === undefined) {
        reject('Url Required');
        return;
    } else if (method === undefined) {
        reject('Method Required');
        return;
    }

    let tokenValue = null;
    let tokenString = localStorage.getItem("token");
    if (tokenString != null) {
        let token = JSON.parse(tokenString);
        tokenValue = token.token;
    }

    fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token': tokenValue,
        }
    }).then((result) => {
        resolve(result);
    }).catch((error) => {
        reject(error)
    });


});  