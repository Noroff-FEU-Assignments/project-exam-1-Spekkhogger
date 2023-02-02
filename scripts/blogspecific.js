const pageTitle = document.querySelector("title"); 
const pageContainer = document.querySelector(".blog-post-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const blogPostPath = params.get("post");

console.log(blogPostPath); 

const url = "http://localhost:8888/wp-json/wp/v2/posts/" + blogPostPath + "?_embed";

console.log(url)

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

        pageTitle.innerHTML = `${blogTitle}`;

        pageContainer.innerHTML = `
            <h1> ${blogTitle} </h1>
            <p class="date">${dateCreated}</p>
            <img src="${blogImage}">
            <div class="post-content">
                ${content}
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