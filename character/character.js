// Step 4
alert(`Hello! my name is kenya and I will be your guide!. Welcome to the underwater Kingdom1`);
// Step 5
const charName = prompt(`What is your character's name?`, "Wanderer") || "Wanderer";
// step 6
const petName = prompt(`What type of pet would you like to have for ${charName}?`, "Tulkun");
// Step 7
const superpower = prompt(`What superpower would you like to have for ${charName}?`, "Invisibility");
// Step 8
const trainingYearsText = prompt(`How many years has ${charName} been training for?`, "2");
const trainingYears = Number(trainingYearsText);

console.log(trainingYearsText, typeof trainingYearsText);
console.log(trainingYears, typeof trainingYears);

const powerLevel = (trainingYears * 10);
// Step 9
const likesFighting = confirm(`Does ${charName} like fighting monsters?
    Click OK for yes, 
    Click Cancel for no.`);
console.log(likesFighting, typeof likesFighting);
// Step 10
alert(`Gathering magic for ${charName}... almost ready!`);
// Step 11
alert(`
    ===================================
    Name: ${charName}
    Pet: ${petName}
    Superpower: ${superpower}
    Power Level: ${powerLevel}
    Monster fighter? ${likesFighting ? "Yes" : "No"}

    In the underwater Kingdom, ${charName} is known for their ${superpower} power and their loyal pet ${petName}. ${charName} has a power level of ${powerLevel}, together they are unstoppable.
    ===================================
`);