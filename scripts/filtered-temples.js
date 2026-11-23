const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');

    hamburger.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Orem, Utah, United States",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orem-utah-temple/orem-utah-temple-42114.jpg"
    },
    {
        templeName: "Harare Zimbabwe",
        location: "Harare, Zimbabwe",
        dedicated: "2026, March, 1",
        area: 17247,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/harare-zimbabwe-temple/harare-zimbabwe-temple-63352.jpg",
    },
    {
        templeName: "Los Angeles California",
        location: "Los Angeles, California, United States",
        dedicated: "1956, March, 11",
        area: 190614,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-21926.jpg",
    },
];

createCards(temples);

const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

homeButton.addEventListener("click", () => {
    createCards(temples);
});
oldButton.addEventListener("click", () => {
    createCards(temples.filter(temple => parseInt(temple.dedicated) < 1900)
    );
});
newButton.addEventListener("click", () => {
    createCards(temples.filter(temple => parseInt(temple.dedicated) > 2000)
    );
});
largeButton.addEventListener("click", () => {
    createCards(temples.filter(temple => temple.area > 90000)
    );
});
smallButton.addEventListener("click", () => {
    createCards(temples.filter(temple => temple.area < 10000)
    );
});

function createCards(filteredTemples) {
    document.querySelector(".album").innerHTML = "";
    filteredTemples.forEach(temple => {
        let figure = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedicate = document.createElement("p");
        let floorSpace = document.createElement("p");
        let templeImg = document.createElement("img");

        name.textContent = temple.templeName;

        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;

        dedicate.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;

        floorSpace.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;

        templeImg.setAttribute("src", temple.imageUrl);
        templeImg.setAttribute("alt", `${temple.templeName} Temple`);
        templeImg.setAttribute("loading", "lazy");

        figure.appendChild(name);
        figure.appendChild(location);
        figure.appendChild(dedicate);
        figure.appendChild(floorSpace);
        figure.appendChild(templeImg);

        document.querySelector(".album").appendChild(figure);
    });
}


