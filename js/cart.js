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
                        <td>${result[j].quantity}</td>
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