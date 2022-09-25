async function homepageController(request, response, next) {
    return response.render('home');
}

module.exports = {
    homepageController,
}