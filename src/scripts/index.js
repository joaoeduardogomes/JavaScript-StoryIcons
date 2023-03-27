import { AdventureIcons, treasureHunterIcons } from "./icons.js";

// Sort icons function:
function sortIcons(iconsList) {
    const sortedIcons = [];

    while (sortedIcons.length < 9) {
        const sortedNumber = Math.floor(Math.random() * iconsList.length); //exclui o último valor.

        const selectedIcon = iconsList[sortedNumber];

        if (!sortedIcons.includes(selectedIcon)) {
            sortedIcons.push(selectedIcon);
        }
    }

    return sortedIcons;
}



// Add event listener to btn:
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const result = sortIcons(treasureHunterIcons);
    console.log(result);
});