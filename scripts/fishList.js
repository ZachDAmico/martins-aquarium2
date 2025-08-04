import { getFish } from './aquariumData.js';

// this is the original function to loop through the fish and create individual cards for each to be displayed
// it no longer works once we try to filter because it can't accept an argument(aka the filtered arrays)because it is designed to specifically only loop the entire database because the for of loop is inside the function and using the entire database array
// in order to fix that, i need to create a new function that's only purpose is to create html cards for the fish with no looping so it can be used later in the filter functions
// export const fishList = () => {
    // Generate an HTML representation of each fish

// needed to move fishArray here to avoid initialization error
//     const fishArray = getFish();

//    let fishHTML = "";

//     for (const fish of fishArray) {
//         fishHTML += `
//         <article class="fish">
//         <img src="${fish.image}" alt="${fish.name}" class="fish__image">
//         <div class="fish__details">
//         <h3 class="fish__name">${fish.name}</h3>
//         <p class="fish__species">${fish.species}</p>
//         <p class="fish__length">${fish.length}</p>
//         <p class="fish__location">${fish.location}</p>
//         <p class="fish__diet">${fish.diet}</p>
//         </div>
//         </article>
//         `;
//     }
//     return fishHTML
// };

// this a helper function that only creates and returns individual fish cards html while expecting a single fish parameter
export const fishCardHTMLCreator = (fish) => {
    return `
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
    `
}
