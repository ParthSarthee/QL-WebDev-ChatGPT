let aboutPara = document.getElementById("about-para");
let toggleAbout = document.getElementById("toggle-about");


toggleAbout.addEventListener("click", function () {
    aboutPara.classList.toggle("hide");

    if (toggleAbout.textContent == "Show More") {
        toggleAbout.textContent = "Show Less";
    } else {
        toggleAbout.textContent = "Show More";
    }
});

// Navbar Toggle Logic
let toggleNav = document.getElementById("toggle-nav");
let navLinks = document.getElementById("navbar-links");
let mobileNav = document.getElementById("navbar-mobile");

let menuIcon = document.getElementById("menu-img");
let closeIcon = document.getElementById("close-img");

console.log(menuIcon, closeIcon);
let isNavOpen = true;

toggleNav.addEventListener("click", function () {
    // mobileNav.classList.toggle("hide");
    navLinks.classList.toggle("hide");

    if (!isNavOpen) {
        menuIcon.classList.add("hide");
        closeIcon.classList.remove("hide");
        isNavOpen = true;
    } else {
        menuIcon.classList.remove("hide");
        closeIcon.classList.add("hide");
        isNavOpen = false;
    }
});




let nameInput = document.getElementById("name-input");
let emailInput = document.getElementById("email-input");
let formBtn = document.getElementById("form-btn");
let contactModal = document.getElementById("contact-modal");
let contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", function () {
    contactModal.classList.toggle("hide");
})

formBtn.addEventListener("click", function (e) {
    e.preventDefault();
    sendContactDetails(nameInput.value, emailInput.value);
    contactModal.classList.toggle("hide");
    nameInput.value = "";
    emailInput.value = "";
})

async function sendContactDetails(name, email) {
    const newData = { name: name, email: email }

    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newData)
    });

    const data = await response.text();
    console.log(data);
}