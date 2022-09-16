
const getPosts = require('./handlers/getPosts');
const posts = getPosts();

async function homepageController(request, response, next) {
    const viewContext = {
        posts: posts
    };
    return response.render('homepage', viewContext);
}

module.exports = {
    homepageController,
}