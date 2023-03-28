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

async function createCubes() {
    const iconsSection = document.querySelector('section#icons');
    iconsSection.innerText = ""; // Clean everyting inside the section, so we don't just add more and more cubes.

    //! waiting for the loading icon:
    await loader();

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

function changeBasics() {
    const h1 = document.querySelector('h1#title');
    h1.textContent = "Story Icons";

    const p = document.querySelector('p');
    p.innerText = `Here are your icons!
    Go ahead and tell your story.

    You can click on a dice to differentiate which ones are already part of the story and which ones are not.`
}

async function loader() {
    // Show an loading icon for a short period of time
    const loader = document.querySelector('div.loader');
    loader.classList.remove('hidden');

    await sleep(2000);

    loader.classList.add('hidden')
}

//! sleep function:
const sleep = ms => new Promise(res => setTimeout(res, ms));

//? Add event listener to btn:
const button = document.getElementById('btn');
button.addEventListener('click', async () => {
    const icons = sortIcons(treasureHunterIcons);

    await createCubes();

    combine(icons);

    changeBasics();

});

