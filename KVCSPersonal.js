//* NavBar section With Light Dark Effect //
const toggleBtn = document.querySelector('.toggle-button');
const icon = document.querySelector('.toggle-icons');
const body = document.body;

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

//* Hamburger menu toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('#mobileMenu .nav-links');

    hamburger.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
});

//* Hero section Part //
const phrases = ["Software Engineer ", "AI & ML ", "MERN Stack Developer ", "FullStack WebDeveloper ", "Ui/Ux Designer "];
const typedText = document.getElementById("typed-text");
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[i];
    if (isDeleting) {
        typedText.textContent = currentPhrase.slice(0, j--);
    } else {
        typedText.textContent = currentPhrase.slice(0, j++);
    }

    if (!isDeleting && j === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        setTimeout(type, 300);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
type();

// my projects Filter section //
const tabs = document.querySelectorAll(".tab-btn");
const projects = document.querySelectorAll(".project-card");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        // Add active to clicked tab
        tab.classList.add("active");

        const category = tab.getAttribute("data-category");

        projects.forEach(project => {
            if (category === "all" || project.getAttribute("data-category") === category) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});

// Smooth scroll for all nav links (desktop and mobile)
document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            const target = document.querySelector(href.trim());
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                // Optionally close mobile menu
                const mobileMenu = document.getElementById('mobileMenu');
                if (mobileMenu) mobileMenu.classList.remove('active');
            }
        }
    });
});

// Section for Projects
const projectsSection = document.getElementById('projects');
const myProjectsLink = document.querySelector('a[href="#projects"]');

myProjectsLink.addEventListener('click', function(e) {
    e.preventDefault();
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});
