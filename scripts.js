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
document.addEventListener("DOMContentLoaded", function() {
    // Simulate user data for authentication
    const USERNAME = "user1";
    const PASSWORD = "password123";

    // Login form handling
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.onsubmit = function(event) {
            event.preventDefault();
            const usernameInput = document.getElementById("username").value;
            const passwordInput = document.getElementById("password").value;

            if (usernameInput === USERNAME && passwordInput === PASSWORD) {
                // Store the logged-in status in localStorage
                localStorage.setItem("loggedIn", "true");
                localStorage.setItem("username", usernameInput);

                // Redirect to dashboard
                window.location.href = "index.html";
            } else {
                document.getElementById("login-error").style.display = "block";
            }
        }
    }

    // Logout functionality (can add this to any page with a logout button)
    const logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", function() {
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("username");
            window.location.href = "login.html";
        });
    }

    // Redirect users to the login page if they are not authenticated
    if (window.location.pathname !== "/login.html" && !localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
});
