const url = "https://sanna.codes/wp-json/wp/v2/posts?per_page=100&_embed";

const sliderDiv = document.querySelector(".latest-blog-slider");
const rigthButton = document.querySelector(".slider-button rigth");
const leftButton = document.querySelector(".slider-button left");

const getSlider = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            if (i === 4) {
                break;
            }
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"]["rendered"];
            const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
            const blogImageAlt = data[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"];
            const excerpt = data[i]["excerpt"]["rendered"];

            sliderDiv.innerHTML += `
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