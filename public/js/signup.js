let form = document.getElementById('signup-form')

// Handle form submit for creating new user in db
form.addEventListener("submit", async function(e) {
    e.preventDefault();
    const username = e.target[0].value.trim()
    const password = e.target[1].value.trim()

    if (username && password) {
        const response = await fetch('/api/users/', {
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