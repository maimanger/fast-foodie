const claim = (state="never", action) => {
    switch (action.type) {
        case 'init-claim-status':
            return action.claimStatus
        default:
            return state;
    }
}

export default claim;