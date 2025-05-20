

import { getCode, getNameList, overwrite } from 'country-list';

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

overwrite([
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
]);

export const getEmojiByCountryName = (countryName: string) => {
    const names = countryName.split(', ');
    const codes = names.map(name => getCode(name));

    if (!!codes.length) {
        const iconUrls = codes.map(code => {
            if (!code) return '';
            const iconUrl = `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
            console.log(`Icon URL: ${iconUrl}`);
            return iconUrl;
        });
        return iconUrls;
    }
    return [];
};