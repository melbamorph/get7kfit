document.addEventListener("DOMContentLoaded", function() {
    // Simulate user data for authentication
    const USERNAME = "user1";
    const PASSWORD = "password123";

    // Get the current path name
    const currentPath = window.location.pathname;

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

                // Redirect to dashboard (index.html)
                window.location.href = "index.html";
            } else {
                document.getElementById("login-error").style.display = "block";
            }
        };
    }

    // Redirect users to the login page if they are not authenticated and not already on the login page
    if (currentPath !== "/login.html" && !localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
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

    // Example: Handling the profile form submission
    const profileForm = document.querySelector(".profile-form");
    if (profileForm) {
        profileForm.onsubmit = function(event) {
            event.preventDefault();
            alert("Profile updated successfully!");
        };
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
