let counter = 0;
let nameTextTag = document.getElementsByClassName("nameText")[0];
let nameText = nameTextTag.textContent;
let splitName = nameText.split("");
nameTextTag.textContent = "";

for(let i = 0; i < splitName.length; i++){
    nameTextTag.innerHTML += "<span class='nameSpan'>" + splitName[i] + "</span>"
}

let interval = setInterval(function(){
    let nameSpans = document.getElementsByClassName("nameSpan")[counter];
    nameSpans.classList.add("nameItem");
    counter++;

    if(counter === splitName.length){
        clearInterval(interval);
        interval = null;
        return;
    }
}, 100);


