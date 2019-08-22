const name = document.getElementById("name")
const password = document.getElementById("password")
const mail = document.getElementById("mail")
const form = document.getElementById("form")
const errorElement = document.getElementById("errorElement")

form.addEventListener('submit', (e)=> {
let messages=[]
if (name.value === '' || name.value === null){
    messages.push("Name is Required")
}
if (password.value === '' || password.value === null){
    messages.push("password is Required")
}
if (mail.value === '' || mail.value === null){
    messages.push("mail is Required")
}
if(messages.lenth>0){
    e.preventDefault()
    errorElement.innerText=messages.join(',')
}
})
