const url = "https://sanna.codes/wp-json/wp/v2/posts?per_page=100&_embed";
const container = document.querySelector(".archive-wrap"); 
const loadMoreButton = document.querySelector(".load-more")

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

        function loadMore (){
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
                        <a href="blogspecific.html?post=${blogID}" class="read-more-link">Read more...</a>
                    </div>
                </div>
                `;
            }
        };

        const loadMoreFun = () => {
                    console.log("end reached");
                    loadMore();    
                    loadMoreButton.style.display = "none" ;
        };

        loadMoreButton.addEventListener("click", loadMoreFun);



    }

    catch(error) {
        console.log("There was a mistake " + error);
    
    }
}



getData();