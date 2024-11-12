document.addEventListener("DOMContentLoaded", function() {
    // Example: Handling the profile form submission
    const profileForm = document.querySelector(".profile-form");
    profileForm.onsubmit = function(event) {
        event.preventDefault();
        alert("Profile updated successfully!");
    }
    
    // Example: Toggle navigation links color
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ff6347";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "#fff";
        });
    });
});
