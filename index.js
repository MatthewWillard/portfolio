function aboutMe() {
  return `
    <section id="aboutMePage" role="main">
    <h2>Matthew Willard</h2> 
    <p>Hi, I’m Matthew. I’m a web developer based in the Salt Lake City, Utah area. I love sports, movies, music, and all things tech. I’m currently 
    trying to expand my knowledge of HTML, CSS, Javascript, Jquery, React, Express, Node.js, and PostgreSQL. I love coding because it allows me to 
    express my creativity and it appeals to my desire to solve problems.  I spent over five years of my life managing the cleanliness of 
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
  <h2>Training Tracker App</h2>    
  <img id="training" src="images/trainingtracker.png" width="800" height="500" alt="preview of training tracker App"> 
  <p class="projectsAbout">An app for managers to track the trainings of their employees. Login required, create account or use Username: Demo -  Password: Password0!  Built with HTML, CSS, React, Node.js, PostgreSQL, and Express.js. 
  </p>
  <div>
  <a href="https://trainingtracker.mwillard.now.sh/" target="_blank">Link</a>
  </div>
  <a href="https://github.com/MatthewWillard/training-tracker" target="_blank">Repository</a> 
 <h3>Technology Used</h3>
  <span><img class="techLogos" src="images/html5.png" width="60" height="60" alt="black and white HTML5 logo"></span>
  <span><img class="techLogos" src="images/css3.png" width="60" height="60" alt="black and white CSS3 logo"></span>
  <span><img class="techLogos" src="images/js.png" width="60" height="60" alt="black and white Javascript logo"></span>
  <span><img class="techLogos" src="images/react.png" width="60" height="60" alt="black and white react logo"></span>
  <span><img class="techLogos" src="images/node.png" width="60" height="60" alt="black and white node logo"></span>
  <span><img class="techLogos" src="images/PostgreSQL.png" width="60" height="60" alt="black and white PostgreSQL logo"></span>
  <span><img class="techLogos" src="images/express.png" width="60" height="60" alt="black and white express logo"></span>
    </section>
    <section id="projectsPage" role="main">
  <h2>Sports News App</h2>    
  <img id="Sports" src="images/nflNews.png" width="800" height="500" alt="preview of sports App"> 
  <p class="projectsAbout">A sports news app that gives you all the latest NFL, NHL, and news from ESPN. Login required, create account or use Username: TestName -  Password: Password0!  Built with HTML, CSS, React, Node.js, PostgreSQL, and Express.js. 
  </p>
  <div>
  <a href="https://all-for-one-sports.mwillard.now.sh" target="_blank">Link</a>
  </div>
  <a href="https://github.com/MatthewWillard/all-for-one-sports" target="_blank">Repository</a> 
 <h3>Technology Used</h3>
  <span><img class="techLogos" src="images/html5.png" width="60" height="60" alt="black and white HTML5 logo"></span>
  <span><img class="techLogos" src="images/css3.png" width="60" height="60" alt="black and white CSS3 logo"></span>
  <span><img class="techLogos" src="images/js.png" width="60" height="60" alt="black and white Javascript logo"></span>
  <span><img class="techLogos" src="images/react.png" width="60" height="60" alt="black and white react logo"></span>
  <span><img class="techLogos" src="images/node.png" width="60" height="60" alt="black and white node logo"></span>
  <span><img class="techLogos" src="images/PostgreSQL.png" width="60" height="60" alt="black and white PostgreSQL logo"></span>
  <span><img class="techLogos" src="images/express.png" width="60" height="60" alt="black and white express logo"></span>
    </section>
    <section id="projectsPage" role="main">
    <h2>Event Search App</h2>    
    <img id="event" src="images/apiapp.png" width="800" height="500" alt="preview of Events App"> 
    <p class="projectsAbout">My Event Search app is a basic API app that shows you local sporting and musical events in a searched location.
      The user inputs their location and the most popular events are returned</p>
    <div>
    <a href="https://matthewwillard.github.io/eventSearch/index.html" target="_blank">Link</a>
    </div>
    <a href="https://github.com/MatthewWillard/eventSearch" target="_blank">Repository</a> 
   <h3>Technology Used</h3>
    <span><img class="techLogos" src="images/html5.png" width="60" height="60" alt="black and white HTML5 logo"></span>
    <span><img class="techLogos" src="images/css3.png" width="60" height="60" alt="black and white CSS3 logo"></span>
    <span><img class="techLogos" src="images/js.png" width="60" height="60" alt="black and white Javascript logo"></span>
    <span><img class="techLogos" src="images/jq.png" width="60" height="60" alt="black and white jquery logo"></span>
  </section>
  <section id="projectsPage" role="main">
    <h2>Game of Thrones Quiz</h2>
    <img id="thrones" src="images/quiz.png" width="750" height="500" alt="preview of Game of Thrones Quiz"> 
    <p class="projectsAbout">My Game of Thrones quiz is a short ten question app.  It quizzes you on house sigils and words.
    After every question accurate feedback is received and at the end of the quiz the user receives an 
    out of 10 score.</p>
    <div>
    <a href="https://matthewwillard.github.io/quiz_app/" target="_blank">Link</a>
    </div>
    <a href="https://github.com/MatthewWillard/quiz_app" target="_blank">Repository</a> 
   <h3>Technology Used</h3>
    <span><img class="techLogos" src="images/html5.png" width="60" height="60" alt="black and white HTML5 logo"></span>
    <span><img class="techLogos" src="images/css3.png" width="60" height="60" alt="black and white CSS3 logo"></span>
    <span><img class="techLogos" src="images/js.png" width="60" height="60" alt="black and white Javascript logo"></span>
    <span><img class="techLogos" src="images/jq.png" width="60" height="60" alt="black and white jquery logo"></span>
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
          <a href="https://github.com/MatthewWillard" target="_blank"><img class="contactLogos" src="images/github.png" width="60" height="60" alt="Github logo"></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/matthew-willard-122a3538/" target="_blank"><img class="contactLogos" src="images/linkedin.png" width="60" height="60" alt="linkedin logo"></a>
        </div>
        <div>
          <a href="mailto:mwillard85@gmail.com" target="_blank"><img class="contactLogos" src="images/gmail.png" width="60" height="60" alt="gmail logo"></a>
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

