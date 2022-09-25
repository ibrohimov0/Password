window.addEventListener('load', () => {
    if(!window.localStorage.getItem('user1' || 'user2') && !window.localStorage.getItem('user1_pass' || 'user2_pass')) {
        window.location = 'index.html'
    }
})