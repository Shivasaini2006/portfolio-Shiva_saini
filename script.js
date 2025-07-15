// Function to download actual PDF resume
function downloadResume() {
    const pdfUrl = "Shiva_Saini_Resume.pdf"; // Make sure this file is in the same folder
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'Shiva_Saini_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    alert('Your resume is being downloaded!');
}

// Smooth scrolling for navigation (if nav links are added)
document.addEventListener('DOMContentLoaded', function () {
    // Enable smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Scroll animations for sections
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
