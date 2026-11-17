const year = document.querySelector("#currentyear")
document.getElementById("lastModified").textContent = document.lastModified
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span > `;


const tempText = document.querySelector("#temperature")
const temp = parseFloat(tempText.textContent)
const speedText = document.querySelector("#wind-speed")
const speed = parseFloat(speedText.textContent)
const windChill = document.querySelector("#windchill")

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16))
        + (0.3965 * (temperature * windSpeed ** 0.16));
}

if (temp <= 10 && speed > 4.8) {
    const chillValue = calculateWindChill(temp, speed);
    windChill.textContent = chillValue.toFixed(2);
}
else {
    windChill.textContent = "N/A";
}

