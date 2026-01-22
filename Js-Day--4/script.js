// let arr = [5,-3,16,-11,-7,8]
// let res=[]

// while(Array.length > 0){
//     let val = arr.shift();
//     if (val>0){
//         res.push(val);
//     }
// } 

// console.log(res);


// let arr2=[1,2,3,2,1]

// let original = [];
// let reverse = [];

// for(let i=0; i< arr2.length; i++){
//     original.push(arr2[i]);
//     console.log(original);
// }

// while(arr2.lenght > 0){
//     reverse.push(arr2.pop())

// }

// for (i=0;i<original.length ; i++){
//     if(original[i]=== reverse[i]){
//         console.log("It is Palidrome")
//     }
//     else{
//         console.log("Not A Palidrome")
//     }
// }



let arr2=[1,2,3,2,1]

let original = [];
let reverse = [];

for(let i=0; i< arr2.length; i++){
    original.push(arr2[i]);
    console.log(original);
}


function palidrome(){

while(arr2.lenght > 0){
    reverse.push(arr2.pop())

}

for (i=0;i<original.length ; i++){
    if(original[i]!== reverse[i]){
        return("It is Not Palidrome")
        
    }
    
}
return("It is Palidrome")
}

console.log(palidrome)