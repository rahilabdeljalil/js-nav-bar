//classlist - show or gets all classes;
//contains - checks classlist for specific class
//add - add class
//remove - remove class
//toggle - toggle class


const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")
// so here we listen to the nav-toggle and we give it a function to see if the toggle links had the show-links class and if he does then when we click we want to remove it 
// else if we do not have show-links class in the link then if we click we want to show it and loop on that when click remove or add

// navToggle.addEventListener("click", function(){
//     if(links.classList.contains('show-links')){
//         links.classList.remove("show-links")
//     }
//     else{
//         links.classList.add('show-links')
//     }
// })

// but we have in js what called toggle and he does what the if else statment does wich he looks 
// if the class is there then remove and if not then show 

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links')
})