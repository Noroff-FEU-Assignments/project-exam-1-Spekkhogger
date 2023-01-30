const url = "http://localhost:8888/wp-json/wp/v2/posts?_embed";





const getData = async() => {
    try {
        const response = await fetch(url); 
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const blogID = data[i]["id"];
            const blogTitle = data[i]["title"];
            // const blogMainImage = data[i][]
            console.log(blogTitle); 
            
        }
        
    }

    catch(error) {
        console.log("There was a mistake " + error);
    
    }
}




getData();