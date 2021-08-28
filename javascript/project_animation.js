let projects = document.getElementsByClassName("project");
let style = document.createElement("style");
style.type  = "text/css";
let i = 0
let interval = setInterval(function(){

    for(i = 0; i < projects.length; i++){
        projects[i].classList.add("project-item");
    }

    if(i === projects.length){
        clearInterval(interval);
        interval = null;
        return;
    }
}, 50);

