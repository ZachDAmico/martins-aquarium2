import { getFish } from './aquariumData.js';


// const fishArray = getFish()
export const fishList = () => {
    // Generate an HTML representation of each fish

// needed to move fishArray here to avoid initialization error
    const fishArray = getFish();

   let fishHTML = "";

    for (const fish of fishArray) {
        fishHTML += `
        <article class="fish">
        <img src="${fish.image}" alt="${fish.name}" class="fish__image">
        <div class="fish__details">
        <h3 class="fish__name">${fish.name}</h3>
        <p class="fish__species">${fish.species}</p>
        <p class="fish__length">${fish.length}</p>
        <p class="fish__location">${fish.location}</p>
        <p class="fish__diet">${fish.diet}</p>
        </div>
        </article>
        `;
    }
    return fishHTML
};