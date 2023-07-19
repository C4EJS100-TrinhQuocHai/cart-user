/* let products=[
    {
        name:"iphone 10",
        price:"20000000",
        image:"./asset/image/image1.jpg",
        quantity:1,
    },
    {
        name: "iphone 11",
        price: "21000000",
        image: "./asset/image/image2.jpg",
        quantity: 1,
    },
    {
        name: "iphone 12",
        price: "22000000",
        image: "./asset/image/image3.jpg",
        quantity: 1,
    },
    {
        name: "iphone 13",
        price: "23000000",
        image: "./asset/image/image4.jpg",
        quantity: 1,
    }, {
        name: "iphone 14",
        price: "24000000",
        image: "./asset/image/image4.jpg",
        quantity: 1,
    },
    {
        name: "iphone 15",
        price: "25000000",
        image: "./asset/image/image5.jpg",
        quantity: 1,
    },
    {
        name: "iphone 16",
        price: "26000000",
        image: "./asset/image/image6.jpg",
        quantity: 1,
    },
    {
        name: "iphone 18",
        price: "28000000",
        image: "./asset/image/image7.jpg",
        quantity: 1,
    },
    
]
// function tạo id
function createId() {
    return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
}
for (let i = 0; i < products.length; i++) {
    products[i].id=createId();
}
console.log(products);
localStorage.setItem("products",JSON.stringify(products)); */