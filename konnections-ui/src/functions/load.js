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


export function timespanToDate(timespan) {
    let dateOb = new Date(timespan);
    let year = dateOb.getFullYear();
    let month = dateOb.getMonth() + 1;
    let date = dateOb.getDate();
    if (month < 10) {
        month = "0" + month;
    }
    if (date < 10) {
        date = "0" + date;
    }
    let dateString = "";
    dateString += year;
    dateString += "-";
    dateString += month;
    dateString += "-";
    dateString += date;
    return dateString;
}
