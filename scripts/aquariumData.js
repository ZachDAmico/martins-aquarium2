const database = {
  fish: [
    {
      name: "Nemo",
      species: "Clownfish",
      length: 3,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image: "https://example.com/images/nemo.jpg",
    },
    {
      name: "Dory",
      species: "Blue Tang",
      length: 5,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image: "https://example.com/images/dory.jpg",
    },
    {
      name: "Marlin",
      species: "Clownfish",
      length: 4,
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image: "https://example.com/images/marlin.jpg",
    },
    {
      name: "Gill",
      species: "Moorish Idol",
      length: 6,
      location: "Sydney Aquarium",
      diet: "Carnivore",
      image: "https://example.com/images/gill.jpg",
    },
    {
      name: "Bubbles",
      species: "Yellow Tang",
      length: 4,
      location: "Sydney Aquarium",
      diet: "Herbivore",
      image: "https://example.com/images/bubbles.jpg",
    },
    {
      name: "Deb",
      species: "Four Stripe Damselfish",
      length: 3,
      location: "Sydney Aquarium",
      diet: "Omnivore",
      image: "https://example.com/images/deb.jpg",
    },
    {
      name: "Peach",
      species: "Starfish",
      length: 5,
      location: "Sydney Aquarium",
      diet: "Carnivore",
      image: "https://example.com/images/peach.jpg",
    },
    {
      name: "Jacques",
      species: "Cleaner Shrimp",
      length: 2,
      location: "Sydney Aquarium",
      diet: "Detritivore",
      image: "https://example.com/images/jacques.jpg",
    },
    {
      name: "Bruce",
      species: "Great White Shark",
      length: 15, // divisible by 5
      location: "Open Ocean",
      diet: "Carnivore",
      image: "https://example.com/images/bruce.jpg",
    },
    {
      name: "Anchor",
      species: "Hammerhead Shark",
      length: 9, // divisible by 3
      location: "Open Ocean",
      diet: "Carnivore",
      image: "https://example.com/images/anchor.jpg",
    },
    {
      name: "Chum",
      species: "Mako Shark",
      length: 8, // neither
      location: "Open Ocean",
      diet: "Carnivore",
      image: "https://example.com/images/chum.jpg",
    },
    {
      name: "Squirt",
      species: "Sea Turtle",
      length: 5, // divisible by 5
      location: "East Australian Current",
      diet: "Herbivore",
      image: "https://example.com/images/squirt.jpg",
    },
    {
      name: "Crush",
      species: "Sea Turtle",
      length: 12, // divisible by 3
      location: "East Australian Current",
      diet: "Herbivore",
      image: "https://example.com/images/crush.jpg",
    },
    {
      name: "Mr. Ray",
      species: "Spotted Eagle Ray",
      length: 10, // divisible by 5
      location: "Reef School",
      diet: "Carnivore",
      image: "https://example.com/images/mr-ray.jpg",
    },
    {
      name: "Nigel",
      species: "Pelican",
      length: 7, // neither
      location: "Sydney Harbor",
      diet: "Carnivore",
      image: "https://example.com/images/nigel.jpg",
    },
    {
      name: "Flo",
      species: "Four Stripe Damselfish",
      length: 3, // divisible by 3
      location: "Sydney Aquarium",
      diet: "Omnivore",
      image: "https://example.com/images/flo.jpg",
    },
    {
      name: "Tad",
      species: "Butterflyfish",
      length: 6, // divisible by 3
      location: "Great Barrier Reef",
      diet: "Omnivore",
      image: "https://example.com/images/tad.jpg",
    },
    {
      name: "Sheldon",
      species: "Seahorse",
      length: 4, // neither
      location: "Great Barrier Reef",
      diet: "Herbivore",
      image: "https://example.com/images/sheldon.jpg",
    },
  ],

  tips: [
    {
      topic: "Water Temperature",
      text: "Maintain a consistent water temperature between 75-80°F (24-27°C) for most tropical fish.",
    },
    {
      topic: "Feeding Schedule",
      text: "Feed Whenever",
    },
    {
      topic: "Exercise",
      text: "All fish must run laps.",
    },
  ],

  locations: [
    {
      name: "Great Barrier Reef",
      country: "Australia",
      description:
        "The Great Barrier Reef is the world's largest coral reef system, supporting a diverse array of marine life.",
    },
    {
      name: "Middle of Nowhere",
      country: "USA",
      description: "Endless Nothingness",
    },
  ],
};

export const getFish = () => {
  return structuredClone(database.fish);
};

export const getTips = () => {
  return structuredClone(database.tips);
};

export const getLocations = () => {
  return structuredClone(database.locations);
};
