const barMenu = document.querySelector(".bar-menu");
const smallScreenMenu = document.querySelector(".small-screen-menu");
const closeMenu = document.querySelector(".fa-circle-xmark");

// Set the initial value using JavaScript
smallScreenMenu.style.left = "-50%"; // Initial value, so the menu is hidden

function closeSmallScreenMenu() {
    smallScreenMenu.style.left = "-50%";
}

barMenu.addEventListener("click", () => {
    if (smallScreenMenu.style.left === "0px") {
        closeSmallScreenMenu();
    } else {
        smallScreenMenu.style.left = "0px";
    }
});

closeMenu.addEventListener("click", () => {
    closeSmallScreenMenu();
});

document.addEventListener("click", (event) => {
    if (event.target !== smallScreenMenu &&
        event.target !== barMenu &&
        event.target !== closeMenu) {
        closeSmallScreenMenu();
    }
});

// Slides

const testimonials = document.querySelectorAll('.slide'); 
const prevButton = document.querySelector('.left'); 
const nextButton = document.querySelector('.right'); 

let currentIndex = 0; 

// Function to show a testimonial by index

function showSlide(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.classList.remove('hide'); // Show the one with the matching index
        } else {
            testimonial.classList.add('hide'); // Hide the others
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showSlide(currentIndex); 
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showSlide(currentIndex); 
});

// Initially, only the first testimonial is shown
showSlide(currentIndex);

// scroll down to overview section

const discoverButton = document.querySelector(".discover-more-button")
const overviewSection = document.querySelector(".overview")

discoverButton.addEventListener("click", () => {
    overviewSection.scrollIntoView({behavior: "smooth"})
})


