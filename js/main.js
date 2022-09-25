const nameId = document.getElementById('nameId')
const passId = document.getElementById('passId')
const button = document.getElementById('button')

var storage = [
    {
        user1: 'Abdulloh',
        user1_pass: '123aaa'
    },
    {
        user2: 'Abdurahmon',
        user2_pass: '456bbb'
    }
]

var names = []
var passwords = []

button.addEventListener('click', () => {
    for(var item of storage) {
        names.push(Object.values(item)[0])
        passwords.push(Object.values(item)[1])
        if(names.join().includes(nameId.value) && passwords.join().includes(passId.value)) {
            window.location = 'welcome.html'
            window.localStorage.setItem(Object.keys(item)[0] ,Object.values(item)[0])
            window.localStorage.setItem(Object.keys(item)[1] ,Object.values(item)[1])
        }
    }
}) 

// nameId.value == window.localStorage.getItem('user1' || 'user2') && passId.value == window.localStorage.getItem('user1_pass' || 'user2_pass')