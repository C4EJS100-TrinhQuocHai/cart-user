// function convert sang tiền việt
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
/* 
lấy dữ liệu đỔ ra 
    có id user
    lấy giỏ hàng ra
 */

let idUser=localStorage.getItem("checkLogin") || [];
let users = JSON.parse(localStorage.getItem("users"))||[];
function rederCarts() {
    
    let total=0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser==idUser){
            // lấy giỏ hàng ra users[i].cart
            let element="";
            let result=users[i].cart;
         
           
            for (let j = 0; j < result.length; j++) {
                total += result[j].price * result[j].quantity;
                element+=
                `
                    <tr>
                        <td>${j+1}</td>
                        <td>${result[j].name}</td>
                        <td>${VND.format(result[j].price)}</td>
                        <td class="action-quantity">
                            <span onclick=decreaseQuatity(${result[j].id}) class="material-symbols-outlined">
                                remove
                            </span>
                            ${result[j].quantity}
                            <span onclick=increaseQuatity(${result[j].id}) class="material-symbols-outlined">
                                    add
                            </span>
                        </td>
                        <td>${VND.format(result[j].price * result[j].quantity)}</td>
                        <td>  5% </td>
                    </tr>
                `
            }
            document.getElementById("tbody").innerHTML=element;
            document.getElementById("total").innerHTML = `Tổng tiền : ${VND.format(total)}`;

        }
        
    }
}
rederCarts();
// render số lượng sản phẩm trong giỏ hàng
// function tăng số lượng sản phẩm
function increaseQuatity(idProduct) {
    // console.log("11111", idProduct);
    //lấy giỏ hàng ra
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser){
            //users[i].cart
            for (let j = 0; j < users[i].cart.length; j++) {
                if(users[i].cart[j].id==idProduct){
                    users[i].cart[j].quantity = ++users[i].cart[j].quantity;
                    localStorage.setItem("users",JSON.stringify(users));
                    rederCarts();
                    return;
                }
            }
        }
        
    }
}
function decreaseQuatity(idProduct) {
    // console.log("11111", idProduct);
    //lấy giỏ hàng ra
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            //users[i].cart
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idProduct) {
                    if (users[i].cart[j].quantity==1){
                        return;
                    }
                    users[i].cart[j].quantity = --users[i].cart[j].quantity;
                  
                    localStorage.setItem("users", JSON.stringify(users));
                    rederCarts();
                    return;
                }
            }
        }

    }
}
