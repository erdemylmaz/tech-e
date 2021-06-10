// init projects
// let projects = JSON.parse(data);
let projects = [
  {
    title: "Clicker Game",
    info: "Click and make cig kofte and sell them for upgrade your company",
    hasWebsite: true,
    link: "game",
    githubLink: "clicker-game-v3",
    tags: ["Game"],
  },
  {
    title: "Piggy Bank",
    info: "Set your goal and start to save money for your goal",
    hasWebsite: true,
    link: "piggybank",
    githubLink: "piggy-bank",
    tags: ["Project"],
  },
  {
    title: "Twitch Chat Bot",
    info: "Basic chat bot for twitch chats",
    hasWebsite: false,
    link: "",
    githubLink: "twitch-bot",
    tags: ["Bot", "NodeJS"],
  },
  {
    title: "Crypto Game",
    info: "Learn how to investing from game, buy and sell crypto coins",
    hasWebsite: true,
    link: "crypto",
    githubLink: "crypto-game",
    tags: ["Game"],
  },
  {
    title: "Rock Paper Scissors",
    info: "Rock Paper Scissors game, you vs computer",
    hasWebsite: true,
    link: "game2",
    githubLink: "rock-paper-scissors",
    tags: ["Game"],
  },
]; // uncomment that while uploading

const projectsArea = document.querySelector(".projects");

projects = projects.reverse();

projects.map((project) => {
  let div = document.createElement("div");
  div.className = "project";

  if (project.tags.length == 1) {
    div.innerHTML = `
  <div class="projects-title">${project.title}</div>
  <div class="projects-info">${project.info}</div>
  <div class="projects-footer">
      <div class="projects-tags">
        <div class="tag">${project.tags[0]}</div>
      </div>
      <div class="projects-links">
          <a href="https://www.github.com/erdemylmaz/${project.githubLink}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>
          <a href="http://www.erdemyilmaz.me/${project.link}" target="_blank" class="project-link">Visit</a>
      </div>
  </div>
  `;
  }

  if (project.tags.length == 2) {
    div.innerHTML = `
  <div class="projects-title">${project.title}</div>
  <div class="projects-info">${project.info}</div>
  <div class="projects-footer">
      <div class="projects-tags">
        <div class="tag">${project.tags[0]}</div>
        <div class="tag">${project.tags[1]}</div>
      </div>
      <div class="projects-links">
          <a href="https://www.github.com/erdemylmaz/${project.githubLink}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>
          <a href="http://www.erdemyilmaz.me/${project.link}" target="_blank" class="project-link">Visit</a>
      </div>
  </div>
  `;
  }

  if (project.hasWebsite == false) {
    div.innerHTML = `
  <div class="projects-title">${project.title}</div>
  <div class="projects-info">${project.info}</div>
  <div class="projects-footer">
      <div class="projects-tags">
        <div class="tag">${project.tags[0]}</div>
        <div class="tag">${project.tags[1]}</div>
      </div>
      <div class="projects-links">
          <a href="https://www.github.com/erdemylmaz/${project.githubLink}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>
      </div>
  </div>
  `;
  }

  projectsArea.prepend(div);
});

// header
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const bttBtn = document.querySelector(".btt-btn");
const logo = document.querySelector(".logo-div");

const aboutBtn = document.querySelector(".about-link");
const projectsBtn = document.querySelector(".projects-link");
const contactBtn = document.querySelector(".contact-link");
const contactBtn3 = document.querySelector(".about-contact-text");

const aboutBtn2 = document.querySelector(".about-link2");
const projectsBtn2 = document.querySelector(".projects-link2");
const contactBtn2 = document.querySelector(".contact-link2");

const aboutDiv = document.querySelector(".about-div");
const projectsDiv = document.querySelector(".projects-div");
const contactDiv = document.querySelector(".contact-div");

let headerHeight = header.getBoundingClientRect().height;
let aboutsPosition = aboutDiv.offsetTop;
let projectsPosition = projectsDiv.offsetTop;
let contactsPosition = contactDiv.offsetTop;

const menuBtn = document.querySelector(".header-responsive-menu-btn");
const responsiveMenu = document.querySelector(".r-menu");
const responsiveMenuItems = document.querySelectorAll(".res-menu-item");

showItems = () => {
  if (responsiveMenu.classList.contains("active")) {
    responsiveMenu.classList.remove("active");

    responsiveMenuItems.forEach((item) => {
      item.classList.remove("show-menu-item");
    });
  } else {
    responsiveMenu.classList.add("active");

    responsiveMenuItems.forEach((item) => {
      item.classList.add("show-menu-item");
    });
  }
};

menuBtn.addEventListener("click", showItems);

resetLinks = () => {
  let links = document.querySelectorAll(".menu-item");

  links.forEach((link) => {
    link.classList.contains("active-link")
      ? link.classList.remove("active-link")
      : "";
  });
};

onScroll = () => {
  const currentPosition = pageYOffset;

  if (currentPosition >= headerHeight - 10) {
    header.classList.add("fixed-header");
    container.style.marginTop = `${headerHeight}px`;

    bttBtn.style.display = "flex";
  } else {
    header.classList.remove("fixed-header");
    container.style.marginTop = `0px`;

    bttBtn.style.display = "none";
  }

  if (currentPosition >= aboutsPosition - headerHeight + 10) {
    resetLinks();

    aboutBtn.classList.add("active-link");
  }

  if (currentPosition < aboutsPosition) {
    resetLinks();
  }

  if (currentPosition >= projectsPosition - headerHeight - 10) {
    resetLinks();

    projectsBtn.classList.add("active-link");
  }

  if (currentPosition >= contactsPosition - headerHeight - 10) {
    resetLinks();

    contactBtn.classList.add("active-link");
  }
};
scrollToAbout = () => {
  resetLinks();
  aboutsPosition = aboutDiv.offsetTop;

  aboutBtn.classList.add("active-link");

  window.scrollTo({
    top: aboutsPosition,
  });
};

scrollToProjects = () => {
  resetLinks();
  projectsPosition = projectsDiv.offsetTop;

  projectsBtn.classList.add("active-link");

  window.scrollTo({
    top: projectsPosition - headerHeight,
  });
};

scrollToContact = () => {
  resetLinks();
  contactsPosition = contactDiv.offsetTop;

  contactBtn.classList.add("active-link");

  window.scrollTo({
    top: contactsPosition,
  });

  console.log(contactsPosition);
};

backToTop = () => {
  aboutBtn.classList.remove("active-link");

  window.scrollTo({
    top: 0,
  });
};

aboutBtn.addEventListener("click", scrollToAbout);
projectsBtn.addEventListener("click", scrollToProjects);
contactBtn.addEventListener("click", scrollToContact);

aboutBtn2.addEventListener("click", () => {
  scrollToAbout();

  showItems();
});

projectsBtn2.addEventListener("click", () => {
  scrollToProjects();

  showItems();
});

contactBtn2.addEventListener("click", () => {
  scrollToContact();

  showItems();
});

contactBtn3.addEventListener("click", scrollToContact);

bttBtn.addEventListener("click", backToTop);
logo.addEventListener("click", backToTop);

document.addEventListener("load", onScroll);
document.addEventListener("scroll", onScroll);

const images = document.querySelectorAll("img");

images.forEach((img) => {
  if (!img.classList.contains("img")) {
    img.style.width = "0";
    img.style.height = "0";
  }
});

const switchBtn = document.querySelector(".switch-mode");
const switchBtn2 = document.querySelector(".switch-mode2");

let mode = "light";

if (localStorage.getItem("theme")) {
  mode = localStorage.getItem("theme");
}

switchTo = (mode) => {
  if (mode == "dark") {
    document.body.classList.add("dark");
    switchBtn.innerHTML = "<i class='fas fa-moon'></i>";
  } else {
    document.body.classList.remove("dark");
    switchBtn.innerHTML = "<i class='fas fa-sun'></i>";
  }
};

switchMode = () => {
  mode == "light" ? (mode = "dark") : (mode = "light");

  switchTo(mode);
  localStorage.setItem("theme", mode);
};

switchTo(mode);

switchBtn.addEventListener("click", switchMode);
switchBtn2.addEventListener("click", switchMode);
