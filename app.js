
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
const json = require('./dino.json');
const dinosaurs = json.Dinos.map(dinosaur => new Dinosaur(dinosaur));

// Create Human Object and initialise and empty one
function Human(name, height, weight, diet) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
};

const user = new Human()

// Use IIFE to get human data from form and edit properties of empty Human object
(function (human) {
    human.name = document.getElementById('name').value;
    human.height = document.getElementById('height').value;
    human.weight = document.getElementById('weight').value;
    human.diet = document.getElementById('diet').value;
})(user);


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

    // Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic
