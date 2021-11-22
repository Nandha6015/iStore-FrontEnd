const upass = document.getElementById('uname')
const uemail = document.getElementById('uemail')
const upass = document.getElementById('upass')
const uaddress = document.getElementById('uaddress')

function signup(){
    fetch("http://localhost:8080/signup",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"userName":uname.value,"userEmail":uemail.value,"userPassword":upass.value,"userAddress":uaddress.value})
    }).then(res => res.json()).then(data => {console.log(data)})
}
signup()