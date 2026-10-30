const year = document.querySelector("#currentyear")
document.getElementById("lastModified").textContent = document.lastModified
const today = new Date();

year.innerHTML = `<span>${today.getFullYear()}</span > `;