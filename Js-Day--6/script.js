// let user = {
//     fullname:"Lokesh",
//     address :"Palam",
//     MobileNo : "98765678",
//     favcolor : ["Red ","Pink","Blue"]
// }


// console.log(user.fullname,user.MobileNo,user.favcolor[2]);



// let user = {
//     fullname:"Lokesh",
//     address :{
//         city :"Palam",
//         state : "Delhi"},
//     MobileNo : "98765678",
//     favcolor : ["Red ","Pink","Blue"],
//     demo :function(){
//         return "demo function";

//     }
// }


// console.log(user.fullname,user.MobileNo,user.favcolor[2],
//     user.demo() , user.address.city
// );



const car = {
    make: "Mahindra",
    model : "Thar"
};


Object.seal(car);

Object.freeze(car);

car.model = "XUV700";
car.color = "black";
console.log(car);