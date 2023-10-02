'use strict';

const api_key = 'a59355415a84c4e295b28a2153871f3c';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

const fetchDataFromServer = function (url, callback, optionalPrams) {
    fetch(url)
        .them(response => response.json())
        .then(date => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };