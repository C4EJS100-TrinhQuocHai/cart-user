
// function convert sang tiền Việt
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
/* console.log('Dollars: ' + USDollar.format(price)); // Dollars: $21,450.00
console.log('Việt Nam đồng: ' + VND.format(price)); // Việt Nam đồng: 21.450 ₫ */
// lấy danh sách sản phẩm trên local về để render
let products = JSON.parse(localStorage.getItem("products"))||[];
let users = JSON.parse(localStorage.getItem("users")) || [];

// function render danh sách sản phẩm
let checkLogin = localStorage.getItem("checkLogin");
if(checkLogin){
    document.getElementsByClassName("login")[0].style.display="none";
    document.getElementsByClassName("register")[0].style.display = "none";
    document.getElementsByClassName("person")[0].style.display = "block";

}
function renderProducts() {
        let element="";
        for (let i = 0; i < products.length; i++) {
            element+=
            `
               <div class="product__item">

                    <div class="product__item--image">
                        <img src="${products[i].image}" alt="">
                    </div>

                    <div class="product__item--infor">
                        <div class="product__item--name">
                            ${products[i].name}
                        </div>

                        <div class="product__item--price">
                         ${VND.format(products[i].price)}
                            <span onclick="addToCart(${products[i].id})" class="material-symbols-outlined choose-cart">
                                shopping_cart_checkout
                            </span>
                        </div>
                    </div>
                </div> 
            `
        }
    document.getElementsByClassName("products")[0].innerHTML=element;
}
renderProducts();
// function mua hàng
function addToCart(idProduct) {
   /*  console.log("11111", idProduct); */
    // kiểm tra xem người dùng đã đăng nhập hay chưa
    // nếu chưa đăng nhập thì không cho mua hàng
    
    if (checkLogin ==null){
        console.log("bạn phải đăng nhập để mua hàng ");
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == checkLogin){
            // tìm giỏ hàng của người dùng  theo id
            // users[i].cart
            // đi push sản phẩm vào giỏ hàng
            // có id của sản phẩm 
            let productDetail=products.filter((phat)=>{
                return   phat.id==idProduct
            })
           /*  users[i].cart.push(productDetail[0]); */
          // trước khi push vào giỏ hàng thì kiểm tra trong giỏ hàng đã có sản phẩm đó chưa
          // nếu có rồi thì tăng sản phẩm lên
          for (let j = 0; j < users[i].cart.length; j++) {
                if(users[i].cart[j].id==idProduct){
                    console.log("sản phẩm đã có trong giỏ hàng!");
                  return;
                }
          }  
              users[i].cart.push(productDetail[0]);
            showQuantity();
              localStorage.setItem("users",JSON.stringify(users))
          
        }
        
    }
   
}
// function click user
function clickUser() {
    document.getElementsByClassName("infor__list")[0].style.display="block";
    document.getElementsByClassName("close")[0].addEventListener("click",()=>{
        document.getElementsByClassName("infor__list")[0].style.display = "none";
    })
}
// hàm tăng số lượng giỏ sản phẩm trong giỏ hàng
function showQuantity() {
    if(checkLogin==null){
        document.getElementsByClassName("circle")[0].innerHTML=0;
        return;
    }
    for (let i = 0; i < users .length; i++) {
        if (users[i].idUser == checkLogin){
             document.getElementsByClassName("circle")[0].innerHTML=users[i].cart.length;
        }
    }
}
showQuantity();
// function logout
function logOut(){
    let confirmLogout = confirm("bạn có muốn thoát hay không?");
    if (confirmLogout){
        localStorage.removeItem("checkLogin");
        window.location.reload();
    }
}
