
import { loadNavigation, loadFooter } from './main.js';

function loadContent() {
    
    // Header navigation
    const headerNavContent = loadNavigation;
    document.getElementById('header-nav').innerHTML = headerNavContent;

    // Form
    

    // Footer
    const footerContent = loadFooter;
    document.getElementById('footer').innerHTML = footerContent;
}

// Call the loadContent function when the window is loaded
window.addEventListener('load', loadContent);
