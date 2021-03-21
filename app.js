// Dino data
const jsonData = {
    "Dinos": [
        {
            "species": "Triceratops",
            "weight": 5900,
            "height": 290,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "First discovered in 1889 by Othniel Charles Marsh"
        },
        {
            "species": "Tyrannosaurus Rex",
            "weight": 5400,
            "height": 365,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "The largest known skull measures in at 5 feet long."
        },
        {
            "species": "Anklyosaurus",
            "weight": 4700,
            "height": 140,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Anklyosaurus survived for approximately 135 million years."
        },
        {
            "species": "Brachiosaurus",
            "weight": 31700,
            "height": 944,
            "diet": "herbavor",
            "where": "North America",
            "when": "Late Jurasic",
            "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
        },
        {
            "species": "Stegosaurus",
            "weight": 5200,
            "height": 200,
            "diet": "herbavor",
            "where": "North America, Europe, Asia",
            "when": "Late Jurasic to Early Cretaceous",
            "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
        },
        {
            "species": "Elasmosaurus",
            "weight": 7300,
            "height": 150,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
        },
        {
            "species": "Pteranodon",
            "weight": 20,
            "height": 50,
            "diet": "carnivor",
            "where": "North America",
            "when": "Late Cretaceous",
            "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
        },
        {
            "species": "Pigeon",
            "weight": 0.2,
            "height": 23,
            "diet": "herbavor",
            "where": "World Wide",
            "when": "Holocene",
            "fact": "All birds are living dinosaurs."
        }
    ]
}

// Create Dino Constructor
function Dinosaur(properties) {
    this.species = properties.species;
    this.weight = properties.weight;
    this.height = properties.height;
    this.diet = properties.diet;
    this.where = properties.where;
    this.when = properties.when;
    this.fact = properties.fact;
}

// Create Dino Objects
// Fetch JSON data and store it into a constant as an array of Dinosaur objects
// let jsonData = require('./dino.json');
// url = '/dino.json'
// let request = new XMLHttpRequest();
// request.open('GET', url);
// request.responseType = 'json';
// request.send();
let dinosaurs = jsonData.Dinos.map(dinosaur => new Dinosaur(dinosaur));

// Create Human Object and initialise and empty one
function Human(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
};

let user = new Human();

// Use IIFE to get human data from form and edit properties of empty Human object
(function (human) {
    human.name = document.getElementById('name').value;
    human.height = parseInt(document.getElementById('height').value, 10);
    human.weight = parseInt(document.getElementById('weight').value, 10);
    human.diet = document.getElementById('diet').value;
})(user);

// Create Dino Compare Method 1
let compareHeight = function(dinosaur, human) {
    let heightDifference = dinosaur.height - human.height;
    let message;
    if (heightDifference > 0) {
        message = `You are ${heightDifference} cm shorter than the ${dinosaur.species}`;
    } else if (heightDifference === 0) {
        message = `You are the same exact height as the ${dinosaur.species}!`;
    } else {
        message = `You are ${heightDifference * -1} taller than the ${dinosaur.species}`;
    }
    return message;
}

// Create Dino Compare Method 2
let compareWeight = function(dinosaur, human) {
    let weightDifference = dinosaur.weight - human.weight;
    let message;
    if (weightDifference > 0) {
        message = `You are ${weightDifference} kg lighter than the ${dinosaur.species}`;
    } else if (weightDifference === 0) {
        message = `You are the same exact weight as the ${dinosaur.species}!`;
    } else {
        message = `You are ${weightDifference * -1} heavier than the ${dinosaur.species}`;
    }
    return message;
}

// Create Dino Compare Method 3
let compareDiet = function(dinosaur, human) {
    let message;
    if (dinosaur.diet === height.diet) {
        message = `Both you and the ${dinosaur.species} are ${dinosaur.diet}s`;
    } else {
        message = `While you are a ${human.diet} the ${dinosaur.species} was a ${dinosaur.diet}`;
    }
    return message;
}


// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
