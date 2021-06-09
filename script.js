// init projects
let projects = JSON.parse(data);
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
const contactBtn2 = document.querySelector(".about-contact-text");

const aboutDiv = document.querySelector(".about-div");
const projectsDiv = document.querySelector(".projects-div");
const contactDiv = document.querySelector(".contact-div");

let headerHeight = header.getBoundingClientRect().height;
let aboutsPosition = aboutDiv.offsetTop;
let projectsPosition = projectsDiv.offsetTop;
let contactsPosition = contactDiv.offsetTop;

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
  aboutBtn.classList.add("active-link");

  window.scrollTo({
    top: aboutsPosition,
  });
};

scrollToProjects = () => {
  resetLinks();
  projectsBtn.classList.add("active-link");

  window.scrollTo({
    top: projectsPosition - headerHeight,
  });
};

scrollToContact = () => {
  resetLinks();
  contactBtn.classList.add("active-link");

  window.scrollTo({
    top: contactsPosition,
  });
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
contactBtn2.addEventListener("click", scrollToContact);
bttBtn.addEventListener("click", backToTop);
logo.addEventListener("click", backToTop);

document.addEventListener("load", onScroll);
document.addEventListener("scroll", onScroll);
