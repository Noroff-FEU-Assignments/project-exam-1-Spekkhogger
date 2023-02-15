const url = "https://sanna.codes/wp-json/wp/v2/posts?per_page=100&_embed";
const container = document.querySelector(".archive-wrap"); 

const getData = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);

        for (let i = 0; i < 10; i++) {
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"]["rendered"];
            const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
            const blogImageAlt = data[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"];
            const excerpt = data[i]["excerpt"]["rendered"].slice(0, 200) + "  [...]";
            
            container.innerHTML += `
            <div class="archive-post-wrap"> 
                <div class="archive-image"> 
                    <a href="blogspecific.html?post=${blogID}"><img src="${blogImage}" alt="${blogImageAlt}"></a>
                </div>
                <div class="archive-txt"> 
                    <a href="blogspecific.html?post=${blogID}"><h2> ${blogTitle} </h2></a>
                    <p> ${excerpt} </p>
                    <a href="blogspecific.html?post=${blogID}" class="read-more-link">Read more...</a>
                </div>
            </div>
            `;
        }

        setTimeout (function loadMore (){
            for (let i = 10; i < data.length; i++) {
                const blogID = data[i]["id"];
                const blogTitle = data[i]["title"]["rendered"];
                const blogImage = data[i]["_embedded"]["wp:featuredmedia"][0]["source_url"];
                const blogImageAlt = data[i]["_embedded"]["wp:featuredmedia"][0]["alt_text"];
                const excerpt = data[i]["excerpt"]["rendered"].slice(0, 200) + "  [...]";
                
                container.innerHTML += `
                <div class="archive-post-wrap"> 
                    <div class="archive-image"> 
                        <a href="blogspecific.html?post=${blogID}"><img src="${blogImage}" alt="${blogImageAlt}"></a>
                    </div>
                    <div class="archive-txt"> 
                        <a href="blogspecific.html?post=${blogID}"><h2> ${blogTitle} </h2></a>
                        <p> ${excerpt} </p>
                    </div>
                    <div class="read-more-link">
                        <a href="blogspecific.html?post=${blogID}">Read more...</a>
                    </div>
                </div>
                `;
            }
        }, 2000);

        const infiniteScroll = () => {
                if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
                    console.log("end reached");
                    loadMore();
                    window.removeEventListener("scroll", infiniteScroll);
                }
        };

        window.addEventListener("scroll", infiniteScroll);



    }

    catch(error) {
        console.log("There was a mistake " + error);
    
    }
}



getData();