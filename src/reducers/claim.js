const claim = (state={}, action) => {
    switch (action.type) {
        case 'init-claim':
            return action.claim
        default:
            return state;
    }
}

export default claim;