const alexUser = "Alexis"
const alexisPassword = "12345"
function logIn(params){
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const error = document.getElementById('error');

if(username === alexUser && password){
    localStorage.setItem()
    window.location.href = "home.html";
}else {
        error.textContent = "usuario o contraseña incorrecta"
    }
}
