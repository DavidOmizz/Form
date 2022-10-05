const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const myform = document.getElementById("myform")
const output = document.getElementById("output")


myform.addEventListener("submit", function (e) {
    e.preventDefault()
    if(username.value.length === 0 || email.value.length === 0 || password.value.length === 0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Fileds cannot be empty</div>'
    }
    else {
        output.innerHTML = '<div class="alert alert-success" role="alert">SignUp succefully</div>'
        window.location.href = 'signIn.html'
    }

    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    localStorage.setItem("users", JSON.stringify(user))
})