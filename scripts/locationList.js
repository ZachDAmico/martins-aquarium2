import { getLocations } from "./aquariumData.js";

export const locationsList = () => {
    const locationsArray = getLocations()

    let locationsHTML = '';

    for (const location of locationsArray) {
        locationsHTML += `
        <article class="locations">
            <section class="location">
                <h2 class="location__name">${location.name}</h2>
                <p class="location__country">${location.country}</p>
                <p class="location__description">${location.description}</p>
            </section>
        </article>
        `
    }
    return locationsHTML
}