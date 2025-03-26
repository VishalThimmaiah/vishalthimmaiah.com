// Apply fade-in effect on page load
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");
});

// Smooth page transitions
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = event.target.getAttribute("href");
        
        // Apply fade-out effect before changing pages
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});
