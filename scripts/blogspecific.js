

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const blogPostPath = params.get("post");

const url = "http://localhost:8888/wp-json/wp/v2/posts/" + blogPostPath;

console.log(url)
