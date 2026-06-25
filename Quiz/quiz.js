"use strict";

/* PLANNING / PSEUDOCODE

1. Initialize score = 0

2. Question 1: [Who is my favorite person?]
    - Variable: favoritePerson
   - Correct answer: My husband
   - How I'll validate and check the answer :

    let favoritePerson = prompt("Who is my favorite person?", " ");

    if (favoritePerson.toLowerCase() === `my husband`) {
    alert(`you knew ittt you won 25 points!`);
    } else {
    alert(`buuu it is my husband!`);
    }

3. Use that structure for all four questions.
  Question 2: [Which island is my favorite?]
    - Variable: favoriteIsland
   - Correct answer: Hawaii
   - How I'll validate and check the answer :

    let favoriteIsland = prompt("Which island is my favorite?");

    if (favoriteIsland === `Hawaii` || favoriteIsland === `Maui`) {
    alert(`you got it! 25 points!`);
    } else {
    alert(`close`);
    }

  Question 3: [What is my favorite snack?]
    - Variable: favoriteSnack
   - Correct answer: tamarindo
   - How I'll validate and check the answer :

    let favoriteSnack = prompt("What is my favorite snack?");

    if (favoriteSnack.toLowerCase() === `tamarindo`) {
    alert(`impressive! 25 points!`);
    } else {
    alert(`nop, maybe the next one`);
    }

  Question 4: [What is my favorite color?]
    - Variable: favoriteColor
   - Correct answer: blue
   - How I'll validate and check the answer :

    let favoriteColor = prompt("What is my favorite color?");

    if (favoriteColor.toLowerCase() === `blue`) {
    alert(`you got it! 25 points!`);
    } else {
    alert(`nope, my favorite color is blue!`);
    }

6. Math: How will I calculate the percentage?

let percentage = (score / 4) * 100;

7. Final feedback logic (if / else if / else):

if (percentage === 100) {
    alert(`If you are not my husband you are a stalker!!`);
} else if (percentage > 25 && percentage < 100) {
    alert(`you did great!`);
} else if (percentage <= 25) {
    alert(`you got 1 out of 4 or 0 out of 4!! `);
}

Logical operators I will use:
- I will use && for so that it can check both conditions are true for the percetange if it is less thant 100 and more than 25 then that will make it a great score! 
- I will use || so that question number 2 can accept 2 corrrect answers hawaii or maui
*/

console.log("=== My Quiz Game ===");

// Initialize score
let score = 0;
    alert(`How much you know about me? your score right now is 0`);
// Question 1

let favoritePerson = prompt("Who is my favorite person?", "");

if (favoritePerson && favoritePerson.trim() !== "") 
    if (
        favoritePerson.toLowerCase() === `my husband` || 
        favoritePerson.toLowerCase() === `joan`
    ) {
        score ++;
        alert(`you knew ittt you won 1 point!`);
    } else {
        alert(`buuu it is my husband!`);
    } 
else {
    alert(`you didn't answer the question`);
}



// Question 2

let favoriteIsland = prompt("Which island is my favorite?", "BORA BORA");

    if (favoriteIsland && favoriteIsland.trim() !== "") 
        if (
            favoriteIsland.toLowerCase() === `hawaii` || 
            favoriteIsland.toLowerCase() === `maui`
        ) {
            score ++;
            alert(`you got it! 1 point!`);
    } else {
            alert(`close`);
    }

// Question 3

let favoriteSnack = prompt("What is my favorite snack?", "tajin");

    if (favoriteSnack && favoriteSnack.trim() !== "")
    if (favoriteSnack.toLowerCase() === `tamarindo`) {
    score ++;
    alert(`impressive! 1 point!`);
    } else {
    alert(`nop, maybe the next one`);
    }

// Question 4

let favoriteColor = prompt("What is my favorite color?", "Yellow");
    if (favoriteColor && favoriteColor.trim() !== "") 
    if (favoriteColor.toLowerCase() === `blue`) {
    score ++;
    alert(`you got it! 1 point!`);
    } else {
    alert(`nope, my favorite color is blue!`);
    }

// Calculate percentage using math

let percentage = (score / 4) * 100;

// Final feedback using if / else if / else

if (percentage === 100) {
    alert(`If you are not my husband you are a stalker!!`);
} else if (percentage <100) {
    alert(`you did great!`);
}
/* If statement that uses and alert statement about their score

(correct answers = 3 or 4 or less than 2 or = 0) */

// Additional feedback with logical operators

if (percentage === 0 || percentage === 25) {
    alert(`you got 1 out of 4 or 0 out of 4!! `);
}

// Final summary alert
alert(`Thank you for playing my quiz game! your final score is ${percentage}%`);