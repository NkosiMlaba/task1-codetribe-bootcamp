
import { loadNavigation, loadFooter } from './main.js';

// Define function to load content dynamically
function loadContent() {
    
    // Header navigation
    const headerNavContent = loadNavigation;
    document.getElementById('header-nav').innerHTML = headerNavContent;

    // Video
    const videoPath = "assets/video.mp4"
    const videoContent = `
        <video src="${videoPath}" controls loop autoplay ></video>
    `;
    document.getElementById('video-container').innerHTML = videoContent;

    // Bio
    const bioHeader = "Nkosikhona Mlaba"
    const bioInformation = `I am a dedicated and versatile professional with a passion for software development and graphic design.
    <br><br>
     I encompass a growth mindset and a commitment to stay up-to-date with the latest technlogies and design trends.
     <br><br>
     I am then excited to contribute to innovative and meaning full projects that make a difference. I envision  
     a career where I can blend my creativity with technical expertise that I am learning, and I'm enthusiastic about the doors it will open for me.
    `
    const bioImage = "assets/picture.jpg"

    const bioContent = `
        <div class="text">
            <h2>${bioHeader}</h2>
            <p>${bioInformation}</p>
        </div>
        <div class="image">
            <img src="${bioImage}" alt="Example Image">
        </div>
    `;
    document.getElementById('bio-container').innerHTML = bioContent;

    // Footer
    const footerContent = loadFooter;
    document.getElementById('footer').innerHTML = footerContent;
}

// actual function
window.addEventListener('load', loadContent());
