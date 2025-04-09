// navbar toggle
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
};

document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
};

// scroll event -hide navbar on scroll
window.onscroll = () => {

    navbar.classList.remove('active');

    if (window.scrollY > 100) {
        document.querySelector('header').classList.add('active');
    } else {
        document.querySelector('header').classList.remove('active');
    }
};

// theme toggler
let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-sun');
    if (themeToggler.classList.contains('fa-sun')) {
        document.querySelector('body').classList.add('active');
    } else {
        document.querySelector('body').classList.remove('active');
    }
}

// Image carousel
document.querySelectorAll('.small-image-1').forEach(image => {
    image.onclick = () => {
        document.querySelector('.big-image-1').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(image => {
    image.onclick = () => {
        document.querySelector('.big-image-2').src = image.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(image => {
    image.onclick = () => {
        document.querySelector('.big-image-3').src = image.getAttribute('src');
    }
});



let countDate = new Date('december 1, 2025 00:00:00').getTime();

function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}
setInterval(countDown, 1000);


