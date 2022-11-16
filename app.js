/* Imports */
import { getAllCats } from './fetch-utils.js';
import { renderCard } from './render-utils.js';
/* Get DOM Elements */
const catsContainer = document.querySelector('#cats-container');
/* State */

/* Events */
window.addEventListener('load', async () => {
    const cats = await getAllCats();
    for (let cat of cats) {
        const catEl = renderCard(cat);
        catsContainer.append(catEl);
    }
});
/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
