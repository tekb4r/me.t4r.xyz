let plsel = document.getElementById('pl');
let plimg = document.getElementById('plimg');
let hello = document.getElementById('upper-text');
let projects = document.getElementById('myproj');
let mcserver = document.getElementById('mcserv');
let engsel = document.getElementById('eng');
let data = {
    polish: {
        hello: "Cześć, jestem",
        projects: "Moje projekty:",
        mcserver: "NLMC - Serwer Minecraft"
    },
    english: {
        hello: "Hello, I'm",
        projects: "My projects:",
        mcserver: 'NLMC - Minecraft Server'
    }
}
function plLang() {
    plimg.classList.add("selected");
    engsel.classList.remove("selected");
    hello.innerText = data.polish.hello;
    projects.innerText = data.polish.projects;
    mcserver.innerText = data.polish.mcserver;
}
function engLang() {
    plimg.classList.remove("selected");
    engsel.classList.add("selected");
    hello.innerText = data.english.hello;
    projects.innerText = data.english.projects;
    mcserver.innerText = data.english.mcserver;
}
particlesJS(
    "particles-js",

    {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: ["#456aff", "#2d55f7"]
            },
            move: {
                enable: true,
                speed: 2
            },
            line_linked: {
                enable: false,
            },
            size: {
                value: 10,
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: 0.1,
                  sync: false
                }
              }
        }
    }
)