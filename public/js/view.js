let form = document.getElementById('comment-form')


form.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    let postId = document.querySelector('div[id*="post-"]').id.match(/\d+$/)[0]
    let commentText = e.target[0].value


    if (commentText) {
        const response = await fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify({content: commentText, post_id: postId}),
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            document.location.reload()
        } else {
            alert(response.statusText)
        }
    }

})