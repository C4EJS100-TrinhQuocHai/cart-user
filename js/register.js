
// check định dạng email
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// tạo id cho user
function createId() {
    return Math.floor(Math.random() * 9999999999999 + new Date().getMilliseconds())
}
//  đăng kí tài khoản user
let users = JSON.parse(localStorage.getItem("users"))||[];

// function add user
function register(e) {
    // lấy giá trị người dùng nhập vào.
    e.preventDefault();
    let email=document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if(!isEmail(email)){
        console.log("email không đúng định dạng");
        return;
    }
    if(password!=confirmPassword || password.length < 2){
        console.log("mật khẩu không khớp gì đó!");
        return;
    }
    let userInfor={
        email:email,
        password:password,
        cart:[],
        idUser: createId()
    }
     let checkRegister=users.find((item)=>{
            return item.email==email;
        })
    if(checkRegister){
        console.log("tài khoản đã tồn tại!");
        return;
    }
    users.push(userInfor);
    console.log("đăng kí thành công!");
    localStorage.setItem("users",JSON.stringify(users));
    // chuyển sang trang đăng nhậP
    window.location.href="../html/login.html";
}
