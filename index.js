
import { loadNavigation, loadFooter } from './main.js';

// Define function to load content dynamically
function loadContent() {
    
    // Header navigation
    const headerNavContent = loadNavigation;
    document.getElementById('header-nav').innerHTML = headerNavContent;

    // Video
    const videoContent = `
        <video src="assets/video.mp4" controls loop autoplay ></video>
    `;
    document.getElementById('video-container').innerHTML = videoContent;

    // Bio
    const bioContent = `
        <div class="text">
            <h2>Nkosikhona Mlaba</h2>
            <p>I am a dedicated and versatile professional with a passion for software development and graphic design.
            <br><br>
             I encompass a growth mindset and a commitment to stay up-to-date with the latest technlogies and design trends.
             <br><br>
             I am then excited to contribute to innovative and meaning full projects that make a difference. I envision  
             a career where I can blend my creativity with technical expertise that I am learning, and I'm enthusiastic about the doors it will open for me.
            </p>
        </div>
        <div class="image">
            <img src="assets/picture.jpg" alt="Example Image">
        </div>
    `;
    document.getElementById('bio-container').innerHTML = bioContent;

    // Footer
    const footerContent = loadFooter;
    document.getElementById('footer').innerHTML = footerContent;
}

// actual function
window.addEventListener('load', loadContent());
