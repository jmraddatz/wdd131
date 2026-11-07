const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');

    hamburger.classList.toggle('open');
});
