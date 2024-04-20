import { loadNavigation, loadFooter } from './main.js';

// Define function to load content dynamically
function loadContent() {

    // Header navigation
    const headerNavContent = loadNavigation;
    document.getElementById('header-nav').innerHTML = headerNavContent;

    // About me section
    let greeting1 = "Hello, I'm Nkosikhona <br><br> I'm a Software-developer and Designer"
    
    // education
    const educationTitle = "Education"
    const education = [
        {
            organisation: "WeThinkCode_",
            duration: " - (2023-2024)",
            title: "Systems Development",
        },{
            
            organisation: "Unversity of KwaZulu Natal",
            duration: " - (2020-2022)",
            title: "Bachelor of Accounting (Partially complete)",
        },{
            
            organisation: "Mafumbuka Secondary School",
            duration: " - (2019)",
            title: "National Senior Certificate",
        },
        
    ]
    var educationData = []
    education.forEach(item => {
        educationData.push(`
            <p><strong>${item.organisation}</strong>${item.duration}
                <br>${item.title}
            </p>
            <br>`)
        }
    )


    // other sections
    const sections = [
        {
            section: "Experience",
            organisation: "Hustlers99",
            duration: " - (2023-2024)",
            title: "Graphic Designer and Apparel Designer (Part-time)",
        },{
            section: "Licenses and Certificates",
            organisation: "Havard",
            duration: " - (Year issued 2024)",
            title: "Introduction to Computer Science in Python",
        },{
            section: "Honors and awards",
            organisation: "EThekwini Municipality",
            duration: " - (Year issued 2020)",
            title: "Certificate of Academic Achievement - Certificate awarded for obtaining outstanding perfomance in the academic year 2019",
        }
    ]
    var sectionData = []
    sections.forEach(item => {
        sectionData.push(
            `<h2>${item.section}</h2>
            <p><strong>${item.organisation}</strong>${item.duration}
                <br>${item.title}
            </p>
            <br>`
        )
    })
    
    const aboutContainerContent = `
        <div class="text">
            <h2>${greeting1}</h2>
            <br>
            <h2>${educationTitle}</h2>
            ${educationData.join("")}
            <br>
            ${sectionData.join("")}
        </div>
    `;
    document.getElementById('about-container').innerHTML += aboutContainerContent;

    // projects
    const projectsHeader = "Recent projects"
    const projects = [
        {
        name: "Hangman Game",
        className: "project-1",
        image: "assets/project-1.png",
        linkGithub: "https://github.com/NkosiMlaba/word_guessing_game",
    }, {
        name: "Portfolio Website",
        className: "project-2",
        image: "assets/project-2.png",
        linkGithub: "https://github.com/NkosiMlaba/Minimal-Website",
    }, {
        name: "Voting Application",
        className: "project-3",
        image: "assets/project-3.png",
        linkGithub: "https://github.com/NkosiMlaba/Voting-Application",
    }]

    var projectData = []
    
    projects.forEach(item => {
        projectData.push(`
                <div class="project-box">
                    ${item.name}
                    <div >
                    <img class="${item.className}" src="${item.image}" alt="">
                    </div>

                    <a href="${item.linkGithub}">
                        <button>
                        Github
                        </button>
                    </a>

                </div>
            
        `)})

    const projectDiv = `
    <div class="other-information">
        <h2 style="text-align: center">${projectsHeader}</h2>
        <div class="projects">
            <div style="display: flex; justify-content: center; text-align: center">
                ${projectData.join("")}
            </div>
        </div>
    </div>
    `
    document.getElementById('other-information').innerHTML = projectDiv;

    // Skills icons
    const skillIcons = ["devicon-canva-original colored", "devicon-css3-plain colored",
    "devicon-git-plain-wordmark colored", "devicon-python-plain-wordmark colored",
    "devicon-java-plain-wordmark colored", "devicon-javascript-plain colored",
    "devicon-linux-plain colored", "devicon-vscode-plain-wordmark colored", ]
    
    const skillHeader = "Skills"

    var actualSkillData = []
    
    skillIcons.forEach(item => {
        actualSkillData.push(`<i class="${item}"></i>`)})

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
