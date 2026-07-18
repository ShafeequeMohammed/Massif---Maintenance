// Waits for the page to load completely before running
document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById("maintenance-text");
    const contactInfo = document.querySelector(".contact-info");
    
    // Smoothly fades the text in right after the page loads
    setTimeout(() => {
        textElement.classList.add("visible");
        if (contactInfo) {
            contactInfo.classList.add("visible");
        }
    }, 200);
});
