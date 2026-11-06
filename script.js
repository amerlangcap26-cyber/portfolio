// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


// =================================
// AUTOMATIC COPYRIGHT YEAR
// =================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =================================
// CONTACT FORM
// =================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const message = document.getElementById("message").value.trim();

        const status = document.getElementById("form-status");

        const portfolioEmail = "YOUR_EMAIL@example.com";

        if (!name || !email || !message) {

            status.textContent = "Please complete all fields.";
            return;

        }

        if (portfolioEmail === "YOUR_EMAIL@example.com") {

            status.textContent =
                "Please configure your email address first.";

            return;

        }

        const subject = encodeURIComponent(
            "Message from Portfolio Website"
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        status.textContent =
            "Opening your email application. Please press Send.";

        window.location.href =
            "mailto:" + portfolioEmail +
            "?subject=" + subject +
            "&body=" + body;

    });

}