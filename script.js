    // Select the menu toggle button and navbar links container
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    // Toggle the active class on the navbar links when the menu toggle is clicked
    menuToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
    
    
