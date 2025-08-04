import { getFish } from './aquariumData.js';
import { fishCardHTMLCreator } from './fishList.js';


export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishArray = getFish();

    let holyFishHTML = ""

   for (const fish of fishArray) {
     if (fish.length % 3 === 0) {
        holyFishHTML += fishCardHTMLCreator(fish);
     }
   }

    return holyFishHTML
}

export const soldierFish = () => {
    const fishArray = getFish();

    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishHTML = ""

    for (const fish of fishArray) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            soldierFishHTML += fishCardHTMLCreator(fish);
        }
    }
    return soldierFishHTML
}

export const regularFish = () => {
    const fishArray = getFish();
    // Any fish not a multiple of 3 or 5
    let unholyFishHTML = ""

    for (const fish of fishArray) {
        if (fish.length % 3 !== 0 && fish.length %5 !== 0) { 
            unholyFishHTML += fishCardHTMLCreator(fish);
        }
    }
    return unholyFishHTML
}