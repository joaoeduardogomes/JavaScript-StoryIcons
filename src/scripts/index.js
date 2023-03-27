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

function createCubes() {
    const iconsSection = document.querySelector('section#icons');

    for(let i = 1; i < 9; i++) {
        // The external div:
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.id = `cube-${i+1}`;

        // The abbr to the img:
        const abbr = document.createElement('abbr');

        // The img:
        const img = document.createElement('img');

        // Appending elements (from the inner element):
        abbr.appendChild(img);
        cube.appendChild(abbr);
        iconsSection.appendChild(cube);
    }

    return iconsSection;
}

// Add event listener to btn:
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const result = sortIcons(treasureHunterIcons);
    console.log(result);

    const section = createCubes();
    console.log(section);
});