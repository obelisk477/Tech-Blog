let posts = [...document.querySelectorAll('.box')]

// Handle clicks on posts on homepage
posts.forEach(post => {
    post.style.cursor = "pointer"
    post.addEventListener('click', async (e) => {
        console.log(e.currentTarget.id)
        let postId = e.currentTarget.id.match(/\d+/)[0]
        document.location.replace(`/view/${postId}`);
    })
})