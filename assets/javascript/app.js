$(document).ready(function(){
  
    $("#first-paragraph").text("My name is Sharon Wong. I am currently employed as a Production Support Analyst for one " + 
    " of the biggest global financial corporations. Part of my role includes analyzing and solving incidents received from " + 
    " the end-users, escalating certain end-user requests to IT teams, deploying packaged files such as .jar and .ear file " 
    + " to production, and performing server maintenance. I am currently enrolled with the UCF Coding Bootcamp in hopes of "
    + " improving my coding skillset as I am planning on applying for an application developer position in the near future.")
    $("#second-paragraph").text("My relevant qualifications currently include experience with Java, MySQL, Firebase, and " + 
    " exposure and practice with web development languages such as HTML5, CSS3, JavaScript, JQuery, and Node.js. I also " + 
    "have experience with GitBach, PowerShell, BitBucket, Microsoft Office Suite, Prezi, and Sharepoint."  )
    $("#third-paragraph").text("With my skillset and proven track record, I believe I can be a valuable asset as an " +
    "application developer. I look forward to hearing from you at your earliest convenience. " +
    "Thank you for your time.")
    var portfolioList =

    {
        project: ['assets/imgs/bucketList.PNG','assets/imgs/trainScheduler.PNG', 'assets/imgs/crystalGame.PNG','assets/imgs/triviaGame.PNG','assets/imgs/gifTastic.PNG', 'assets/imgs/psychicGame.PNG'], 

        button: ["Bucket List","Train Scheduler", "Crystal Game","Trivia Game","Gif Project","Psychic Game"],

        }

    var firstRow = $("#first-row-projects")
    var firstProject = $("<th><span class = 'hover1'><img src=" + portfolioList.project[0] + " width='100%' ><span id = 'first-project' class='overlay'><h2>Click Image!</h2></span></span></th>")
    var secondProject = $("<th><span class = 'hover1'><img src=" + portfolioList.project[1] + " width='100%' ><span id = 'second-project' class='overlay'><h2>Click Image!</h2></span></span></th>")
    var thirdProject = $("<th><span class = 'hover1'><img src=" + portfolioList.project[2] + " width='100%' ><span id = 'third-project' class='overlay'><h2>Click Image!</h2></span></span></th>")

    firstRow.append(firstProject).append(secondProject).append(thirdProject)
    $("#first-project").on("click",function(){ window.open("https://github.com/clearplaid/Bucket-List-Buddies")})
    $("#second-project").on("click",function(){ window.open("https://github.com/sdw03c/Train-Scheduler")})
    $("#third-project").on("click",function(){ window.open("https://github.com/sdw03c/unit-4-game")})
  


    var secondRow = $("#second-row-buttons")
    var firstButton = $("<td><button id = 'first-button' width='100%' class = 'btn btn-primary'  value=''>" + portfolioList.button[0] + "</button></td>")
    var secondButton = $("<td><button  id = 'second-button' width='100%' class = 'btn btn-primary'   value=''>" + portfolioList.button[1] + "</button></td>")
    var thirdButton = $("<td><button id = 'third-button' width='100%' class = 'btn btn-primary'   value=''>" + portfolioList.button[2] + "</button></td>")

    secondRow.append(firstButton).append(secondButton).append(thirdButton)
    $("#first-button").on("click",function(){ window.open("https://clearplaid.github.io/Bucket-List-Buddies/")})
    $("#second-button").on("click",function(){ window.open("https://sdw03c.github.io/Train-Scheduler/")})
    $("#third-button").on("click",function(){ window.open("https://sdw03c.github.io/unit-4-game/")})
    var thirdRow = $("#third-row-projects")
    var fourthProject = $("<th><span class = 'hover1'><img src=" + portfolioList.project[3] + " width='100%' ><span  id = 'fourth-project' class='overlay'><h2>Click Image!</h2></span></span></th>")
    var fifthProject = $("<th><span class = 'hover1'><img  src=" + portfolioList.project[4] + " width='100%' ><span id = 'fifth-project' class='overlay'><h2>Click Image!</h2></span></span></th>")
    var sixthProject = $("<th><span class = 'hover1'><img  src=" + portfolioList.project[5] + " width='100%' ><span id = 'sixth-project' class='overlay'><h2>Click Image!</h2></span></span></th>")

    thirdRow.append(fourthProject).append(fifthProject).append(sixthProject)
    $("#fourth-project").on("click",function(){ window.open("https://github.com/sdw03c/TriviaGame")})
    $("#fifth-project").on("click",function(){ window.open("https://github.com/sdw03c/GifTastic")})
    $("#sixth-project").on("click",function(){ window.open("https://github.com/sdw03c/Psychic-game")})

    var fourthRow = $("#fourth-row-buttons")
    var fourthButton = $("<td><button  id = 'fourth-button'width='100%' class = 'btn btn-primary'   value=''>" + portfolioList.button[3] + "</button></td>")
    var fifthButton = $("<td><button id = 'fifth-button' width='100%' class = 'btn btn-primary'   value=''>" + portfolioList.button[4] + "</button></td>")
    var sixthButton = $("<td><button id = 'sixth-button' width='100%' class = 'btn btn-primary'   value=''>" + portfolioList.button[5] + "</button></td>")

    fourthRow.append(fourthButton).append(fifthButton).append(sixthButton)

    $("#fourth-button").on("click",function(){ window.open("https://sdw03c.github.io/TriviaGame/")})
    $("#fifth-button").on("click",function(){ window.open("https://sdw03c.github.io/GifTastic/")})
    $("#sixth-button").on("click",function(){ window.open("https://sdw03c.github.io/Psychic-game")})
   
    $("#name").append("<h5>Sharon Wong</h5>")
    $("#email").append("<h5>Sharn.dwong@gmail.com</h5>")
    $(".btn-github").on("click", function(){window.open("https://github.com/sdw03c")})
    $(".btn-linkedin").on("click", function(){window.open("https://www.linkedin.com/in/sharondwong")})
    $(".btn-pinterest").on("click", function(){window.open("../Updated-Portfolio/assets/docs/Sharon_Wong_Resume.pdf")})

});