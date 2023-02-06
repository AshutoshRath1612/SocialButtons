let box = document.getElementsByClassName("box");
let p = document.getElementsByTagName('p');


Array.from(box).forEach(element => {
    element.addEventListener("mouseenter", (e) =>{
        e.target.querySelector('p').style.display = "block";
    })
    element.addEventListener("mouseleave", (e) =>{
        e.target.querySelector('p').style.display = "none";
    })
    
});