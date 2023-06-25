let posts = [...document.querySelectorAll('.individual-post')]

posts.forEach(post => {
    post.addEventListener('click', async (e) => {
        let postId = e.target.parentElement.id.match(/\d+/)[0]
        document.location.replace(`/dashboard/edit/${postId}`);
    })
})