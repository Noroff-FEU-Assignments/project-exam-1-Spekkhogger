const url = "http://localhost:8888/wp-json/wp/v2/posts?_embed";
const slider = document.querySelector(".latest-blog-slider"); 





const getData = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"]["rendered"];
            const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
            console.log(blogTitle); 
            
         
            slider.innerHTML += `<div class="slider-card">
            <img src="${blogImage}">
            <h3>${blogTitle}</h3>
            </div>
            `;

        }
        
    }

    catch(error) {
        console.log("There was a mistake " + error);
    
    }
}




getData();