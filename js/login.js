const uemail = document.getElementById('uemail')
const upass = document.getElementById('upass')
function login(){
    fetch("http://localhost:8080/login",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({"userEmail":uemail.value,"userPassword":upass.value})
    }).then(res => res.json()).then(data => {console.log(data)})
}
login()