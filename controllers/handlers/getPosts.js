function getPosts(){
    const posts = require('../../data/posts.json');
    posts.map(el => {
        el.content = require(`../../data${el.postPath}`).content;
        el.contentPreview = el.content.slice(0, 100) + '...';
        return el;
    });

    return posts;
};
module.exports = getPosts;