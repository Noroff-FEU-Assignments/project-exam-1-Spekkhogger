const url = "https://sanna.codes/wp-json/wp/v2/posts?per_page=100&_embed";

const sliderDivFirst = document.querySelector(".latest-blog-slider1");
const sliderDivSec = document.querySelector(".latest-blog-slider2");
const rigthButton = document.querySelector(".rigth");
const leftButton = document.querySelector(".left");

const getSlider = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);

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
    sliderDivSec.style.display = "flex";
    leftButton.style.opacity = "100%";
}
function slideLeft(){
    sliderDivFirst.style.display = "flex";
    rigthButton.style.opacity = "100%";
    sliderDivSec.style.display = "none";
    leftButton.style.opacity = "0%";
}


rigthButton.addEventListener("click", slideRight);
leftButton.addEventListener("click", slideLeft);