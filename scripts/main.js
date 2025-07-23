import { fishList } from './fishList.js'
import { tipsList } from './tipList.js'
import { locationsList } from './locationList.js'

// Generate the fish list
const fishHTML = fishList()

// Generate the care tips
const tipsHTML = tipsList()

// Generate the location list
const locationHTML = locationsList()

// Render each HTML string to the correct DOM element
const renderFishListToDOM = (fishHTML) => {
    const fishListElement = document.getElementById("fishList");
    
    if (fishListElement) {
        fishListElement.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"')
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
renderFishListToDOM(fishHTML)
renderTipsListToDOM(tipsHTML)
renderLocationListToDOM(locationHTML)