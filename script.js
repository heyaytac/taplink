// Function to open multiple links
function openLinks(links) {
    links.forEach(link => {
        window.open(link, '_blank');
    });
}

// Add click event listeners to all link buttons
document.addEventListener('DOMContentLoaded', () => {
    const linkButtons = document.querySelectorAll('.link-button');
    linkButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const links = JSON.parse(button.getAttribute('data-links'));
            openLinks(links);
        });
    });
});

const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

function switchTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }    
}

themeToggle.addEventListener('click', switchTheme);