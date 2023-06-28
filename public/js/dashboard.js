let posts = [...document.querySelectorAll('.individual-post')]
let newButton = document.getElementsByClassName('new-post-button')[0]

// Add event listeners to each post 'bar' in dashboard view
posts.forEach(post => {
    post.addEventListener('click', async (e) => {
        let postId = e.target.parentElement.id.match(/\d+/)[0]
        document.location.replace(`/dashboard/edit/${postId}`);
    })
})

// Add event listener for new post click to send to new post page
newButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    document.location.replace(`/dashboard/new`);
})

