document.addEventListener("DOMContentLoaded", function () {
    // Handle navigation menu active state
    const navLinks = document.querySelectorAll("ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            const activeItem = document.querySelector("ul li.active");
            if (activeItem) {
                activeItem.classList.remove("active");
            }
            this.parentElement.classList.add("active");
        });
    });

    // Handle form submission
    const form = document.querySelector(".form form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        alert(`Thank you for your message, ${name}! We will get back to you soon.`);
        form.reset();
    });

    // Book hover effect
    const bookBoxes = document.querySelectorAll(".box");
    bookBoxes.forEach(box => {
        box.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease";
        });
        box.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Scroll to sections smoothly (Only works if section IDs are defined)
    document.querySelectorAll("ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            const sectionId = this.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                event.preventDefault();
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

