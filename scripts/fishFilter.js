import { getFish } from './aquariumData.js';

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const fishArray = getFish();

    let holyFish = []

   for (const fish of fishArray) {
     if (fish.length % 3 === 0) {
        holyFish.push(fish)
     }
   }

    return holyFish
}

export const soldierFish = () => {
    const fishArray = getFish();

    // 5, 10, 15, 20, 25, etc... fish
    let soldierFishArray = []
    for (const fish of fishArray) {
        if (fish.length % 5 ===0) {
            soldierFishArray.push(fish)
        }
    }
    return soldierFish
}

export const regularFish = () => {
    const fishArray = getFish();
    // Any fish not a multiple of 3 or 5
    let unholyFish = []

    for (const fish of fishArray) {
        if (fish.length % 3 != 0) {
        } else if (fish.length % 5 != 0) { 
            unholyFish.push(fish)
        }
    }
    return unholyFish
}