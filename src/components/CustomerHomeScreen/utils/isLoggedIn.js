const isLoggedIn = (profile) => {
    if (profile === undefined) {
        return false;
    } else {
        return Object.keys(profile).length !== 0;
    }

}

export default isLoggedIn;