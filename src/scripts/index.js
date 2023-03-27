import { AdventureIcons, treasureHunterIcons } from "./icons.js";

//? Project functions:
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
    iconsSection.innerText = ""; // Clean everyting inside the section, so we don't just add more and more cubes.

    for(let i = 0; i < 9; i++) {
        // The external div:
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.id = `cube-${i}`;

        // The abbr to the img:
        const abbr = document.createElement('abbr');

        // The img:
        const img = document.createElement('img');

        // Appending elements (from the inner element):
        abbr.appendChild(img);
        cube.appendChild(abbr);
        iconsSection.appendChild(cube);

        //* Selecting the clicked elements to manage those that are already part of the story:
        cube.addEventListener('click', () => {
            cube.classList.toggle('clicked');
        });
    }

    return iconsSection;
}

function combine(images) {
    //* Binding images to cubes:
    for (let i = 0; i < 9; i++) {
        // Setting the abbr tag:
        const abbr = document.querySelector(`#cube-${i} > abbr`);
        abbr.title = images[i].alt;

        // Setting the images and alt texts:
        const img = document.querySelector(`#cube-${i} > abbr > img`);
        img.src = images[i].url;
        img.alt = images[i].alt;
    }
}


//? Add event listener to btn:
const button = document.getElementById('btn');
button.addEventListener('click', () => {
    const icons = sortIcons(treasureHunterIcons);

    createCubes();
    //*console.log(cubes.children) // Pra acessar os elementos internos.

    combine(icons);
});

