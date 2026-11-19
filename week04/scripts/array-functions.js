let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

let namesB = names.filter((name) => name.charAt(0) == "B");

let namesLength = names.map((name) => name.length);

names.reduce((total, name) => total + name.length, 0) / names.length;

const subjectList = document.getElementById("subjects");
const courseSubjects = courses.map((course) => course.split(" ")[0]);
subjectList.innerHTML = courseSubjects
    .map((subject) => `<li>${subject}</li>`)
    .join("");

const countryList = document.getElementById("u");
const uCountries = countries.filter((country) => country.charAt(0) === "U");
countryList.innerHTML = uCountries
    .map((country) => `<li>${country}</li>`)
    .join("");

const prices = fruits.reduce((total, fruit) => total + fruit.price, 0);
document.getElementById("total").textContent = `${prices.toFixed(2)}`;