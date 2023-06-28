
let form = document.getElementById('edit-form')
let deleteButton = document.getElementById('delete-post')


// Add event listenr for handling form submit to update a post
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const title = e.target[0].value.trim()
    const content = e.target[1].value.trim()

    let postNum = document.location.href.match(/\d+$/)[0]

    if (title && content) {
        const response = await fetch(`/api/posts/${postNum}`, {
            method: 'PUT',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        }
    }
})

// Add event listener to button to delete a post
deleteButton.addEventListener('click', async (e) => {
    e.preventDefault();

    let postNum = document.location.href.match(/\d+$/)[0]

    const response = await fetch(`/api/posts/${postNum}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
})