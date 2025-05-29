const email = document.querySelector('.email')
const password = document.querySelector('.password')
const submit = document.querySelector('.submit')
const login = document.querySelector('.login')

const emailUser = 'teste@wayne.com'
const passwordUser = '123'

login.addEventListener('submit', (e) => {
    e.preventDefault() 
    if (email.value == emailUser && password.value == passwordUser) {
        window.location.href = 'system.html'
    } else {
        alert('Email ou senha incorretos.')
    }
})