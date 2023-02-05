const pageTitle = document.querySelector("title"); 
const pageContainer = document.querySelector(".blog-post-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const blogPostPath = params.get("post");

const url = "https://sanna.codes/wp-json/wp/v2/posts/" + blogPostPath + "?_embed";

const fetchBlog = async() => {
    try {
        const response = await fetch(url);
        const blogData = await response.json();
        console.log(blogData);
        const blogTitle = blogData["title"]["rendered"];
        const blogImage = blogData["_embedded"]["wp:featuredmedia"][0]["source_url"];
        const blogImageAlt = blogData["_embedded"]["wp:featuredmedia"][0]["alt_text"];
        const content = blogData["content"]["rendered"];
        const dateCreated = blogData["date"];
        const dateModified = blogData["modified"];
        const author = blogData["_embedded"]["author"][0]["name"];

        // console.log(content);

        const ingred = content.split("</ul>")[0];
        const stepByStep = content.split("</ul>")[1];
        const breadText = content.split("<p>")[1];

        console.log(breadText);
        // console.log(ingred);

        pageTitle.innerHTML = `${blogTitle}`;

        pageContainer.innerHTML = `
            <h1> ${blogTitle} </h1>
            <p class="date">${dateCreated}</p>
            <div class="content-image">
                <img src="${blogImage}" alt="${blogImageAlt}" class="image">
            </div>
            <div class="post-content">
                <div class="ingred">
                    ${ingred}
                </div>
                <div class="step-by-step">
                    ${stepByStep}  
                </div>
            </div>
            <div class="post-info">
                <p class="date">Last modified: ${dateModified}</p>
                <p class="date">Author: ${author}</p>
            </div>
        `;


    } catch (error) {


    }
}

fetchBlog();

