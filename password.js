const passwordbox = document.getElementById("password")
const length = 12

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const digits = "0123456789"
const character = "!@#$%^&*()_+~{}[]?/|\.<>"

const allchars = uppercase + lowercase + digits + character
function createpassword(){
    let password = ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += digits[Math.floor(Math.random() * digits.length)]
    password += character[Math.floor(Math.random() * character.length)]
   
    while(length>password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)]
    }
    passwordbox.value = password
 }

 function copypassword () {
    passwordbox.select()
    document.execCommand("copy")
    alert("copied !")
 }
