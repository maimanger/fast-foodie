const claims = (state=[], action) => {
    switch (action.type) {
        case 'init-claims':
            return action.claims;

        case 'approve-claim':
            const claimId = action.claimId;
            return state.map(claim => {
                if (claim._id === claimId) {
                    return {...claim, status: "approved"}
                } else {
                    return claim
                }
            })

        case 'deny-claim':
            return state.map(claim => {
                const claimId = action.claimId;
                if (claim._id === claimId) {
                    return {...claim, status: "denied"}
                } else {
                    return claim
                }
            })

        default:
            return state;
    }
}

export default claims;