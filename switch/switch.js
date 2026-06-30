"use strict";

let favMonth = prompt("What is your favorite month of the year?", "")
    .toLowerCase();

switch (favMonth) {
    case "march":
    case "april":
    case "may":
        alert ("Spring is nice with everything blooming.");
        break;

    case "june":
    case "july":
    case "august":
        alert ("You enjoy the summer months!");
        break;

    case "september":
    case "october":
    case "november":
        alert ("Fall is fun with all of the pretty colors.");
        break;

    case "december":
    case "january":
    case "february":
        alert ("You love the winter months");
        break;
        
    default:
        alert ("Other months are interesting too");
}
