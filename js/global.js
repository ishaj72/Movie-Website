'use strict';

const addEventOneElements = function (elements, eventType, callback) {
    for (const elem of elements) elem.addEventListener(eventType, callback);
}

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOneElements(searchTogglers, "click", function () {
    searchBox.classList.toggle("active");
});