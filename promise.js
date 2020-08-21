const posts = [
    { title: 'post one', body: 'This is post one' },
    { title: 'post two', body: 'This is post two' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: something is wrong');
            }

        }, 2000);
    })
}
// createPost({ title: 'post three', body: 'this body three' })
//     .then(getPosts)
//     .catch(error => console.log(error));

//async //await
async function init() {
    await createPost({ title: 'post three', body: 'this body three' });
    getPosts();
}

init();

