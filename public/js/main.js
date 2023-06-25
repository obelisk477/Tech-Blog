let logoutButton = document.getElementById('logout-button')


logoutButton.addEventListener('click', async () => {
    const response = await fetch('/api/users/logout', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    })
    if (response.ok) {
        console.log('Logged out')
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }

})