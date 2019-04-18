function aboutMe() {
  return `
    <section id="aboutMePage" role="main">
    <h2>Matthew Willard</h2> 
    <p>Hi, I’m Matthew. I’m a current web development student based in the Salt Lake City, Utah area. I love sports, movies, music, and all things tech. I’m currently 
    trying to expand my knowledge of HTML, CSS, Javascript, and Jquery with many more languages to come. I spent over five years of my life managing the cleanliness of 
    a recreation center so I’m sort of a neat freak. I also love woodworking with dreams of making a rocking chair and canoe one day.</p>
  </section>
  `
  ;
}

function clickOnAboutMe() {
  $('#aboutMeButton').click(function(event) {
    showAboutMePage();
  });
}

function showAboutMePage() {
  $('#container').html(aboutMe());
}


function projects() {
  return `
    <section id="projectsPage" role="main">
    <h2>Game of Thrones Quiz</h2>
    <a href="https://matthewwillard.github.io/quiz_app/" target="_blank">
    <img id="thrones" src="images/quizapp.jpg" width="500" height="500" alt="preview of Game of Thrones Quiz"> 
    </a>
    <p class="projectsAbout">My Game of Thrones quiz is a short ten question app.  It quizzes you on house sigils and words.
    After every question accurate feedback is received and at the end of the quiz the user receives an 
    out of 10 score.</p>
    <a href="https://github.com/MatthewWillard/quiz_app" target="_blank">Repository</a> 
   <h2>Technology Used</h2>
    <img class="techLogos" src="images/html5.png" width="60" height="60" alt="black and white HTML5 logo"> <img class="techLogos" src="images/css3.png" width="60" height="60" alt="black and white CSS3 logo"> <img class="techLogos" src="images/javascript.png" width="60" height="60" alt="black and white Javascript logo"> <img class="techLogos" src="images/jquery.png" width="60" height="60" alt="black and white jquery logo">
  </section>
  `
  ;
}

function clickOnProjects() {
  $('#projectsButton').click(function(event) {
    showProjectsPage();
  });
}

function showProjectsPage() {
  $('#container').html(projects());
}

function contactInfo() {
  return `
    <section id="contactInfoPage" role="main">
    <h2>Contact Info</h2> 
    <div>
    <img class="contactLogos" src="images/github.png" width="60" height="60" alt="Github logo">
    <a href="https://github.com/MatthewWillard" target="_blank">GitHub</a>
    </div>
    <div>
    <img class="contactLogos" src="images/linkedin.png" width="60" height="60" alt="linkedin logo">
    <a href="https://www.linkedin.com/in/matthew-willard-122a3538/" target="_blank">LinkedIn</a>
    </div>
    <div>
    <img class="contactLogos" src="images/gmail.png" width="60" height="60" alt="gmail logo">
    <a href="mailto:mwillard85@gmail.com" target="_blank">Gmail</a>
    </div>
  </section>
  `
  ;
}

function clickOnContactInfo() {
  $('#contactInfoButton').click(function(event) {
    showContactInfoPage();
  });
}

function showContactInfoPage() {
  $('#container').html(contactInfo());
}

function home() {
  return `
    <section id="start-page">
      <h1>Matthew Willard</h1>
      <img id="hero" src="images/MWillardProfile.jpg" width="450" height="600" alt="Matthew Willard profile picture">
    </section>
`;
}

function clickOnHome() {
  $('#homeButton').click(function(event) {
    showHomePage();
  });
}

function showHomePage() {
  $('#container').html(home());
}


function pleaseWork() {
  clickOnAboutMe();
  clickOnProjects();
  clickOnContactInfo();
  clickOnHome();
}

pleaseWork();

