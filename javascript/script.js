let cDisplayStlye = document.getElementsByClassName("contact-form")[0]; //getting html element of contact form
let cFormDisplayed = false;

let gDisplayStyle = document.getElementsByClassName("google-form")[0]; // getting html element of google form
let googleFormDisplayed = false; // used to check if google form is displayed

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

// dismiss google form and change text on the button to show form
function closeForm(){
    gDisplayStyle.style.display = "none";
    document.getElementsByClassName("form-btn")[0].innerHTML = "show form";
    googleFormDisplayed = false;
}

/* 
will be called in the html document when show/dismiss form button is clicked 
closeForm or showForm will be called depending on the state of google form
*/

function googleDisplayStyle(){
    if(googleFormDisplayed == true){
        closeForm();
    }
    else{
        showForm();
    }
}

