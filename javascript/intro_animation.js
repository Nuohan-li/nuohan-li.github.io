
animate(".welcomeText");


function animate(className){
    let counter = 0;
    let welcomeTextTag = document.querySelector(className);

    let welcomeText = welcomeTextTag.textContent;
    let splitText = welcomeText.split("");

    // clear whatever that is in .welcomeText and replace it with bunch of spans using the loop.
    welcomeTextTag.textContent = "";

    // make every character a span  
    for(let i = 0; i < splitText.length; i++){
        welcomeTextTag.innerHTML += "<span>" + splitText[i] + "</span>" 
    }

    /* add spanItem class to each of the characters at given interval, in css, there will be 2
    blocks of code, for span and spanItem. Effect applied to span will then be gradually changed
    as spanItem is being added to each span */
    let interval = setInterval(function(){
        
        let spanItems = document.querySelectorAll("span")[counter];
        spanItems.classList.add("spanItem");
        counter++;

        if(counter === splitText.length){
            clearInterval(interval);
            interval = null;
            return;
        }
    } , 100);
}


