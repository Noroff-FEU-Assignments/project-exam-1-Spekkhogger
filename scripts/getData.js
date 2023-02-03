const url = "http://sanna.codes/wp-json/wp/v2/posts?per_page=100&_embed";
const container = document.querySelector(".archive-wrap"); 

const getData = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"]["rendered"];
            const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
            const blogImageAlt = data[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"];
            const excerpt = data[i]["excerpt"]["rendered"];
            
            container.innerHTML += `
            <div class="archive-post-wrap"> 
                <div class="archive-image"> 
                    <a href="blogspecific.html?post=${blogID}"><img src="${blogImage}" alt="${blogImageAlt}"></a>
                </div>
                <div class="archive-txt"> 
                    <h2> ${blogTitle} </h2>
                    <p> ${excerpt} </p>
                </div>
            </div>
            `;
        }
    }

    catch(error) {
        console.log("There was a mistake " + error);
    
    }
}

getData();