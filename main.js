// main.js
// contains code common amongst all pages like navigation and footer
// as a result it only gets changed in one place

// 

export const loadNavigation = `
        <div class="logo">
            <img src="assets/logo.png" alt="logo">
        </div>
        <div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="aboutme.html">About</a></li>
                <li><a href="contactme.html">Contact</a></li>
            </ul>
        </div>
    `;

export const loadFooter = `
    <nav class="footer-nav">
    <div class="contact" style="text-align: center;">
        Durban, KwaZulu Natal, South Africa
        <br>
        <br>
        <table>
            <tr>
                <td><a href="tel:+27749737807">
                    <img src="assets/phone.png" height="40">
                    </a>
                </td>
                <td>
                    <a href="mailto:nkosimlaba397@gmail.com">
                        <img src="assets/email.png" height="40">
                    </a>
                </td>
            </tr>
        
            <tr>
                <td>
                    <a>0749737807</a>
                </td>
                <td>
                    <a>nkosimlaba397@gmail.com</a>
                </td>
            </tr>
        </table>
    </div>

    <div class="nav-links-container">
        <table>
            <tr>
                <td>
                    <a href="https://linkedin.com/in/nkosikhona-mlaba-1545a7273"> 
                    <img src="assets/linkedin_image.png" height="40">
                    </a>
                </td>
                <td>
                    <a href="https://github.com/NkosiMlaba">
                    <img  src="assets/github_image.png" height="47">
                    </a>
                </td>
            </tr>
            <tr>
                <td><a href="https://linkedin.com/in/nkosikhona-mlaba-1545a7273">LinkedIn</a></td>
                <td><a href="https://github.com/NkosiMlaba">Github</a></td>
            </tr>
        </table>
    </div>

    <div>
        <iframe class="map-container" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110715.36824171784!2d30.908550591813885!3d-29.868447860636252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa0001bc61b7%3A0xcca75546c4aa6e81!2sDurban!5e0!3m2!1sen!2sza!4v1712233576929!5m2!1sen!2sza" width="300vw" height="100vh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </nav>
    `
