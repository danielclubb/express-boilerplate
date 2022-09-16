const getPosts = require('./handlers/getPosts');
const getTags = require('./handlers/getTags');
const posts = getPosts();

async function tagController(request, response, next) {
    console.log('tags controller called');
    const tagName = request.params.tag;

    // If tag url parameter exists, then show the posts tagged with this tag
    if(tagName){
        const properCaseTagName = tagName.charAt(0).toUpperCase() + tagName.slice(1);

        const filteredPosts = posts.filter(el => {
            if(el.tags){
                return el.tags.includes(tagName);
            }
        });
    
        if(filteredPosts.length !== 0){
            const viewContext = {
                posts: filteredPosts,
                title: `Posts tagged with: ${properCaseTagName}`
            };
            return response.render('tag', viewContext);
        }
        return response.redirect('/');
    }
    // Else, show the browse by tag page
    else{
        const viewContext = {
            posts: posts,
            tags: getTags()
        };
        return response.render('tags', viewContext);
    }
};

module.exports = {
    tagController
};