import {API_URL} from "../CONST";

export const claimBusiness = (params) => {
    return fetch(`${API_URL}/claim`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params),
    })
}

export const getClaim = () => {
    return fetch(`${API_URL}/get_claim`, {
        credentials: 'include'
    })
        .then(res => res.json())
}

export const getClaimById = (claimId) => {
    return fetch(`${API_URL}/get_claim/${claimId}`)
        .then(res => res.json())
}


// A Promise is returned.
// 4 claim status in total: 'never', 'unprocessed', 'approved', 'denied'.
export const initClaim = (dispatch) => {
    return fetch(`${API_URL}/get_claim`, {
        credentials: 'include'
    })
        .then(res => res.json())
        .then(response => {
            // if (Object.keys(response).length !== 0 && response['status'] === 'approved') {
            //     dispatch({
            //         type: 'claim-approved',
            //         claim: response
            //     })
            // }
            dispatch({
                type: 'init-claim',
                claim: response
            })
        })
}


// Get all claims
export const getAllClaims = (dispatch) => {
    fetch(`${API_URL}/get_claims`)
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: 'init-claims',
                claims: response
            })
        })
}


export const approveClaim = (dispatch, claim) => {
    fetch(`${API_URL}/approve_claim`, {
        method: 'PUT',
        body: JSON.stringify(claim),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            dispatch({
                type: 'approve-claim',
                claimId: claim._id
            })
        })
}

export const denyClaim = (dispatch, claim) => {
    fetch(`${API_URL}/deny_claim`, {
        method: 'PUT',
        body: JSON.stringify(claim),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => {
            dispatch({
                type: 'deny-claim',
                claimId: claim._id
            })
        })
}


export const checkRestaurantClaimStatus = (restaurantId) => {
    return fetch(`${API_URL}/restaurant_claim_status/${restaurantId}`)
}