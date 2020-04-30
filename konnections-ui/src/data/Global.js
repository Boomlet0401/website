const BASE_URL = "http://182.70.251.183:8080/boomlet/";

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

    }
}