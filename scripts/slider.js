const url = "https://sanna.codes/wp-json/wp/v2/posts?per_page=100&_embed";

const sliderDivFirst = document.querySelector(".latest-blog-slider1");
const sliderDivSec = document.querySelector(".latest-blog-slider2");
const rigthButton = document.querySelector(".rigth");
const leftButton = document.querySelector(".left");
const rigthBall = document.querySelector(".rigth-ball");
const leftBall = document.querySelector(".left-ball");


const getSlider = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);
        sliderDivFirst.innerHTML = "";

        for (let i = 0; i < 4; i++) {
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"]["rendered"];
            const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
            const blogImageAlt = data[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"];
            const excerpt = data[i]["excerpt"]["rendered"];

            sliderDivFirst.innerHTML += `
            <div class="slider-card">
                <a href="blogspecific.html?post=${blogID}"><img src="${blogImage}" alt="${blogImageAlt}"></a>
                <div class="slider-card-text">
                    <a href="blogspecific.html?post=${blogID}"><h2>${blogTitle}</h2></a>
                </div>
                <div class="slider-card-button">
                    <a href="blogspecific.html?post=${blogID}"><p>Read more -></p></a>
                </div>
            </div>
            ` 
        }
        for (let i = 4; i < 8; i++) {
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"]["rendered"];
            const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
            const blogImageAlt = data[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"];
            const excerpt = data[i]["excerpt"]["rendered"];

            sliderDivSec.innerHTML += `
            <div class="slider-card">
                <a href="blogspecific.html?post=${blogID}"><img src="${blogImage}" alt="${blogImageAlt}"></a>
                <div class="slider-card-text">
                    <a href="blogspecific.html?post=${blogID}"><h2>${blogTitle}</h2></a>
                </div>
                <div class="slider-card-button">
                    <a href="blogspecific.html?post=${blogID}"><p>Read more -></p></a>
                </div>
            </div>
            ` 
        }




    }

    catch(error) {
        console.log("There was a mistake " + error);
    
    }
}

getSlider();

function slideRight(){
    sliderDivFirst.style.display = "none";
    rigthButton.style.opacity = "0%";
    rigthBall.style.opacity = "100%";
    sliderDivSec.style.display = "flex";
    leftButton.style.opacity = "100%";
    leftBall.style.opacity = "30%";
}
function slideLeft(){
    sliderDivFirst.style.display = "flex";
    rigthButton.style.opacity = "100%";
    sliderDivSec.style.display = "none";
    leftButton.style.opacity = "0%";
    leftBall.style.opacity = "100%";
    rigthBall.style.opacity = "30%";
}


rigthButton.addEventListener("click", slideRight);
leftButton.addEventListener("click", slideLeft);
leftBall.addEventListener("click", slideLeft);
rigthBall.addEventListener("click", slideRight);