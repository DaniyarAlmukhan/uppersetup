export const getMediacriticColor = (rating: string) => {
    const ratingValue = parseFloat(rating);
    if (ratingValue >= 81) {
        return 'green';
    } else if (ratingValue >= 61) {
        return 'yellowgreen';
    } else if (ratingValue >= 40) {
        return 'orange';
    } else if (ratingValue >= 20) {
        return 'red';
    } else {
        return 'darkred';
    }
}