function getTags(){
    const posts = require('../../data/posts.json');
    let tags = [];
    posts.forEach(post => {
        const postTags = post.tags;
        postTags.forEach(tag => {
            console.log(tag);
            if(!tags.includes(tag)){
                tags.push(tag);
            }
        })
    });
    return tags;
};

module.exports = getTags;