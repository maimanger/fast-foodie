export const calcRatings = (reviews) => {
    if (reviews === undefined || reviews === null || reviews.length === 0) {
        return 0;
    }

    let totalRatings = 0;
    reviews.map(review => {
        totalRatings += review.rating;
    })

    let rating = totalRatings / reviews.length;
    return Math.round(rating * 2) / 2;
}

