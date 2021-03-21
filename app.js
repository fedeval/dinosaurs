
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
let jsonData = require('./dino.json');
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



// Create Dino Compare Method 3



// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
