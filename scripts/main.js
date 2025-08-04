// import { fishList } from './fishList.js'
import { tipsList } from './tipList.js'
import { locationsList } from './locationList.js'
import { mostHolyFish } from './fishFilter.js'
import { soldierFish } from './fishFilter.js'
import { regularFish } from './fishFilter.js'

// Generate the fish list
// const fishHTML = fishList()

// Generate the care tips
const tipsHTML = tipsList()

// Generate the location list
const locationHTML = locationsList()

const displayHolyFishHTML = mostHolyFish()

const displaySoldierFishHTML = soldierFish()

const displayRegularFishHTML = regularFish()

// Render each HTML string to the correct DOM element
// initial function to render entire list to DOM
// const renderFishListToDOM = (holy, soldier, regular) => {
//     const fishListElement = document.getElementById("fishList");
    
//     if (fishListElement) {
//         fishListElement.innerHTML = `${holy} ${soldier} ${regular}`;
//     } else {
//         console.error('Could not find element with id "fishList"')
//     }
// }

// i want to add a header to each filtered fish group to clean it up and make sure it is correct

const renderHolyListToDOM = (holy) => {
    const fishListElement = document.getElementById("holyList");
    
    if (fishListElement) {
        fishListElement.innerHTML = `${holy}`;
    } else {
        console.error('Could not find element with id "holyList"')
    }
}

const renderSoldierListToDOM = (soldier) => {
    const fishListElement = document.getElementById("soldierList");
    
    if (fishListElement) {
        fishListElement.innerHTML = `${soldier}`;
    } else {
        console.error('Could not find element with id "soldierList"')
    }
}

const renderRegularListToDOM = (regular) => {
    const fishListElement = document.getElementById("regularList");
    
    if (fishListElement) {
        fishListElement.innerHTML = `${regular}`;
    } else {
        console.error('Could not find element with id "regularList"')
    }
}


const renderTipsListToDOM = (tipsHTML) => {
    const tipsListElement = document.getElementById("tipsList");

    if (tipsListElement) {
        tipsListElement.innerHTML = tipsHTML;
    } else {
        console.error('Could not find element with id "tipsList"')
    }
}

const renderLocationListToDOM = (locationHTML) => {
    const locationListElement = document.getElementById("locationList")

    if (locationListElement) {
        locationListElement.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList')
    }
}

// needs to be called after defining of function, otherwise could cause initialization error
// renderFishListToDOM(displayHolyFishHTML, displaySoldierFishHTML, displayRegularFishHTML)
renderHolyListToDOM(displayHolyFishHTML)
renderSoldierListToDOM(displaySoldierFishHTML)
renderRegularListToDOM(displayRegularFishHTML)
renderTipsListToDOM(tipsHTML)
renderLocationListToDOM(locationHTML)


