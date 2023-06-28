let form = document.getElementById('new-post-form')

// Handle form submit for creating new post in db
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const title = e.target[0].value.trim()
    const content = e.target[1].value.trim()

    if (title && content) {
        const response = await fetch('/api/posts/', {
            method: 'POST',
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