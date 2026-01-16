//  let numbers = [1, 2, 3];
//  let doubled = numbers.map(x => x * 2);


//  let numbers = [1, 2, 3];
//  let doubled = numbers.map((Tst) =>Tst ** 2);
//  console.log(doubled)



// let scores = [85, 92, 78, 90, 88];
// let highScores = scores.filter(score => score >= 90);



// let scores = [85, 92, 78, 90, 88,34,54,67,87];
// let highScores = scores.filter(score => score%2 == 0);
// console.log(highScores)



// let scores = [85, 92, 78, 90, 88 , 34 ,56 ,54 ,67,100];

// console.log(scores)

// let high = scores.filter((scores) =>{
//     if (scores>30) {
//         console.log(scores , "Pass")
//     }
    
//       else {
//         console.log(scores, "Fail")
//     }
// });



// let scores = [85, 92, 78, 90, 88 , 34 ,56 ,54 ,67,100];


// let sum = 0;

// for(i = 0 ; i<= scores.length ; i++){
//     console.log(
//         sum =  sum + arr[i]
//     )
// }

// console.log(sum)




let arr = [1,2,3,4,5];

let res = arr.reduce((acc,current) => acc*current)
console.log(res)