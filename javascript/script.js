let cDisplayStlye = document.getElementsByClassName("form-div")[0]; //getting html element of contact form
let cFormDisplayed = false;

// show contact information 
function showContact(){
    cDisplayStlye.style.display = "block"; 
    cFormDisplayed = true;
    document.getElementsByClassName("contact-btn")[0].innerHTML = "Dismiss contact form";
}

// dismiss contact information, also closes google form if it's open
function closeContact(){
    cDisplayStlye.style.display = "none"; 
    cFormDisplayed = false;
    document.getElementsByClassName("contact-btn")[0].innerHTML = "Contact Me";
    closeForm();
}

/* 
will be called in the html document when show/dismiss contact button is clicked 
closeContact or showContact will be called depending on the state of the form
*/
function contactDisplayStyle(){
    if(cFormDisplayed == true){
        closeContact();
    }
    else{
        showContact();
    }
}

// show google form and change text on the button to dismiss form
function showForm(){
    gDisplayStyle.style.display = "block";
    document.getElementsByClassName("form-btn")[0].innerHTML = "dismiss form";
    googleFormDisplayed = true;
}

function openNav() {
    document.getElementsByClassName("side-nav")[0].style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementsByClassName("side-nav")[0].style.width = "0";
  }

// navigate to contact, for contact button in project page
function navigateToContact(){
    location.href = "../index.html#contact-div";
}

function tictactoeGit(){
    location.href = "https://github.com/Nuohan-li/TicTacToe_py";
}

function snakeGit(){
    location.href = "https://github.com/Nuohan-li/Snake_py";
}

function botGit(){
    location.href = "https://github.com/Nuohan-li/DRandomBot";
}

function optikGit(){
    location.href = "https://github.com/Eerohne/Optik-Engine";
}

