const getPosts = require('./handlers/getPosts');
const posts = getPosts();

async function postController(request, response, next) {

    const postId = request.params.id;

    const post = posts.filter(el => {
        return el.id === postId;
    });

    if(post.length === 1){
        const viewContext = {
            ...post[0],
            posts: posts,
        };
        return response.render('post', viewContext);
    }
    return response.redirect('/');
};

module.exports = {
    postController
};