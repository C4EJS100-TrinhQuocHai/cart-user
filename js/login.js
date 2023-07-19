// xử lý đăng nhập 
// function login

function login(e) {
   e.preventDefault();
   let users=JSON.parse(localStorage.getItem("users"))||[];
   let email=document.getElementById("email").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if(users[i].email==email && users[i].password==password){
            console.log("đăng nhập thành công!");
            localStorage.setItem("checkLogin",users[i].idUser)
            window.location.href="../index.html";
            return;
        }
        
    }
    console.log("tài khoản không tồn  tại!");
}