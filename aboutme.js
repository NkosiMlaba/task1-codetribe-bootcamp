import { loadNavigation, loadFooter } from './main.js';

// Define function to load content dynamically
function loadContent() {

    // Header navigation
    const headerNavContent = loadNavigation;
    document.getElementById('header-nav').innerHTML = headerNavContent;

    // About me section
    let greeting1 = "Hello, I'm Nkosikhona <br><br> I'm a Software-developer and Designer"
    let greeting2 = ""


    const aboutContainerContent = `
        <div class="text">
            <h2>${greeting1}</h2>
            <br>

            <h2>Experience</h2>
            <p><strong>Hustlers99</strong> - (2023-2024) 
                <br>Graphic Designer and Apparel Designer (Part-time)
            </p>
            <br>

            <h2>Education</h2>
            <p><strong>WeThinkCode_</strong> - (2023-2024) 
                <br>Systems Development
            </p>

            <p><strong>Unversity of KwaZulu Natal</strong> - (2020-2022)
                <br>Bachelor of Accounting (Partially complete)
            </p>

            <p><strong>Mafumbuka Secondary School</strong> - (2019)
                <br>National Senior Certificate
            </p>

            <br>

            <h2>Licenses and Certificates</h2>
            <p><strong>Havard</strong> - (Year issued 2024) 
                <br>Introduction to Computer Science in Python
            </p>

            <br>

            <h2>Honors and awards</h2>
            <p><strong>EThekwini Municipality</strong> - (Year issued 2020) 
                <br>Certificate of Academic Achievement - Certificate awarded for obtaining outstanding perfomance in
                the academic year 2019
            </p>
        </div>

        <div class="other-information">
            <div class="projects">
                <h2>Recent projects</h2>
                <div style="display: flex; justify-content: center;">
                    <div class="project-box">
                        Hangman Game
                        <div >
                        <img class="project-1" src="assets/project-1.png" alt="">
                        </div>
                        <a href="https://github.com/NkosiMlaba/word_guessing_game">
                            <button>
                            Github
                            </button>
                        </a>
                    </div>
                    <div class="project-box">
                        Portfolio Website
                        <div >
                            <img class="project-2" src="assets/project-2.png" alt="">
                        </div>
                        <a href="https://github.com/NkosiMlaba/Minimal-Website">
                            <button >
                            Github
                            </button>
                        </a>
                    </div>
                    <div class="project-box">
                        Voting Application
                        <div >
                            <img class="project-3" src="assets/project-3.png" alt="">
                        </div>
                        <a href="https://github.com/NkosiMlaba/Voting-Application">
                            <button >
                            Github
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="skills">
                <h2>Skills</h2>
                <i class="devicon-canva-original colored"></i>
                <i class="devicon-css3-plain colored"></i>
                <i class="devicon-git-plain-wordmark colored"></i>
                
                <i class="devicon-python-plain-wordmark colored"></i>
                <i class="devicon-java-plain-wordmark colored"></i>
                <i class="devicon-javascript-plain colored"></i>

                <i class="devicon-linux-plain colored"></i>
                <i class="devicon-vscode-plain-wordmark colored"></i>
            </div>
        </div>
    `;
    document.getElementById('about-container').innerHTML = aboutContainerContent;

    const skillIcons = ["devicon-canva-original colored", "devicon-css3-plain colored",
    "devicon-git-plain-wordmark colored", "devicon-python-plain-wordmark colored",
    "devicon-java-plain-wordmark colored", "devicon-javascript-plain colored",
    "devicon-linux-plain colored", "devicon-vscode-plain-wordmark colored", ]
    const skillHeader = "Skills"
    var actualSkillData = []
    skillIcons.forEach(item => {
        actualSkillData.push(`<i class="${item}"></i>`)
    })


    const skillLogos = `<div class="skills">
                            <h2>${skillHeader}</h2>
                            ${actualSkillData.join("")}
                        </div>
                    </div>
    `;
    document.getElementById('skills-logo-container').innerHTML = skillLogos;

    // Footer
    const footerContent = loadFooter;
    document.getElementById('footer').innerHTML = footerContent;
}

// Call the loadContent function when the window is loaded
window.addEventListener('load', loadContent);
