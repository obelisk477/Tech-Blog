let form = document.getElementById('login-form')

// Handle login form submit to authenticate user
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const username = e.target[0].value.trim()
    const password = e.target[1].value.trim()

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type': 'application/json'}
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        }
    }
})