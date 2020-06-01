// FOR LIVE
// const BASE_URL = "https://182.70.251.183:8443/boomlet/";

// FOR DEVELOPMENT
const BASE_URL = "https://192.168.1.34:9443/boomlet/";

export default {
    API: {
        SIGNUP: BASE_URL + "oauth/signup",
        LOGIN: BASE_URL + "oauth/login",
        CREATE_INFLUANCER: BASE_URL + "api/create-influencer",
        INFLUENCER_LIST: BASE_URL + "api/influencer-list",
        GET_INFLUENCER: BASE_URL + "api/get-influencer",
        EDIT_INFLUENCER: BASE_URL + "api/edit-influencer",
        UPDATE_INFLUENCER: BASE_URL + "api/update-influencer",
        DELETE_INFLUENCER: BASE_URL + "api/delete-influencer",
        CREATE_PROPOSAL: BASE_URL + "api/create-proposal",
        PROPOSAL_LIST: BASE_URL + "api/get-proposals",
        GET_PROPOSAL: BASE_URL + "api/get-proposal",
        GET_USERS: BASE_URL + "api/get-users",
        UPDATE_USER_SCOPS: BASE_URL + "api/update-userscops",
        ACTIVE_INACTIVE_USER: BASE_URL + "api/active-inactive-user",
        GET_DISCLAIMER: BASE_URL + "api/get-disclaimer",
        ADD_DISCLAIMER: BASE_URL + "api/add-disclaimer",
        GET_COUNTRIES: BASE_URL + "location/countries",
        GET_STATES: BASE_URL + "location/states",
        GET_CITIES: BASE_URL + "location/cities",
        ADD_EMPLOYEE: BASE_URL + "api/add-employee",
    }
}