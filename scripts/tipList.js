import { getTips } from './aquariumData.js';


export const tipsList = () => {
    const tipsArray = getTips();

    let tipsHTML = "<div class='tips__container'>"
    tipsHTML += "<h2 class='tips__heading'>Tips</h2>";
    tipsHTML += "<ul class='tips'>";

    for (const tip of tipsArray) {
        tipsHTML +=`
        <li class="tip">
        <p class="tip__topic">${tip.topic}</p>
        <p class="tip__text">${tip.text}</p>
        </li>
        `    
    }

    tipsHTML += "</ul>"
    tipsHTML += "</div>"

    return tipsHTML
}