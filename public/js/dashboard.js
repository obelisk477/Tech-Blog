let posts = [...document.querySelectorAll('.individual-post')]
let newButton = document.getElementsByClassName('new-post-button')[0]


posts.forEach(post => {
    post.addEventListener('click', async (e) => {
        let postId = e.target.parentElement.id.match(/\d+/)[0]
        document.location.replace(`/dashboard/edit/${postId}`);
    })
})

newButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    document.location.replace(`/dashboard/new`);
})

