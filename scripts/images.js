const images = document.querySelector(".post-image"); 
const modal = document.querySelector(".modal"); 
const modalImage = document.querySelector(".modalImage");
var clickCounter = 0; 


function largeImage(){
    count();
    images.classList.add("large-image");
    modal.style.display = "block"
}

function count(){
    clickCounter++; 
}

function smallImage(){
    modal.style.display = "none"
    images.classList.remove("large-image");
}


images.addEventListener("click", largeImage); 

if (clickCounter === 2) 
{document.addEventListener("click", smallImage)};


console.log(clickCounter); 