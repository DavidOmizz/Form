const username = document.getElementById("username")
const password = document.getElementById("password")
const output = document.getElementById("output")
const submitForm = document.getElementById("submitForm")

submitForm.addEventListener("submit", function (e) {
    e.preventDefault()
    if(username.value.length === 0 || password.value.length === 0){
        output.innerHTML = '<div class="alert alert-danger" role="alert">Fill the required fields</div>'
    }
    else {
        if(JSON.parse(localStorage.getItem("users"))){
            let myUsers = JSON.parse(localStorage.getItem("users"))
            if(myUsers.username === username.value && myUsers.password === password.value){
                output.innerHTML = '<div class="alert alert-danger" role="alert">Login Succefully</div>'
                window.location.href = "go.html"
            }
            else {
                output.innerHTML = '<div class="alert alert-danger" role="alert">Invalid Password or username</div>'
            }
        }
    }
})