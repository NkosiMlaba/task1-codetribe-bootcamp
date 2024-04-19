
import { loadNavigation, loadFooter } from './main.js';

function loadContent() {
    
    // Header navigation
    const headerNavContent = loadNavigation;
    document.getElementById('header-nav').innerHTML = headerNavContent;

    // Form
    const formContent = `
        <div id="form-inputs">
            <label for="name">Name and Surname:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email Address:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="message">Message:</label><br>
            <textarea id="message" name="message" rows="4" required></textarea><br><br>
            
            <label for="phone">Phone Number:</label><br>
            <input type="tel" id="phone" name="phone"><br><br>
            
            <div >
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </div>
        </div>
    `;
    document.getElementById('contact-form').innerHTML = formContent;

    // Footer
    const footerContent = loadFooter;
    document.getElementById('footer').innerHTML = footerContent;
}

// Call the loadContent function when the window is loaded
window.addEventListener('load', loadContent);
