const database = {
    fish: [
        {
            name: "Nemo",
            species: "Clownfish",
            length: 3,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/nemo.jpg"
        },
        {
            name: "Dory",
            species: "Blue Tang",
            length: 5,
            location: "Great Barrier Reef",
            diet: "Omnivore",
            image: "https://example.com/images/dory.jpg"
        },
    ],

    tips: [
        {
   topic: "Water Temperature",
   text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish."
},
{
    topic: "Feeding Schedule",
    text:"Feed Whenever"
},
{
    topic: "Exercise",
    text:"All fish must run laps."
}
    ],

    locations: [
        {
   name: "Great Barrier Reef",
   country: "Australia",
   description: "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life."
},
{
    name: "Middle of Nowhere",
    country: "USA",
    description: "Endless Nothingness"
}
    ]
}

export const getFish = () => {
    return structuredClone(database.fish);
}

export const getTips = () => {
    return structuredClone(database.tips);
}

export const getLocations = () => {
    return structuredClone(database.locations);
}