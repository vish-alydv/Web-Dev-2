// console.log([1,2]+[3,4])
// console.log(0.1+0.2==0.3);
// console.log(0.1+0.2===0.3);


// Types Of Function

// 1 Regular Function


// function sample(a){
//     console.log(a,"Sample");
// }

// sample(5)

// 2 Arrow Function

// const sample=(a) => console.log(a,"sample")
// sample(9)


// const sample=(a,b) => a+b
// console.log(sample(9,1))


// const sample=(a,b) => {
//     return a+b
// }
// console.log(sample(9,1))

// 3. Call BackFunction
// function sample(){
//     console.log("sample");

// }

// function demo(){
//     console.log("demo")
// }

// sample(demo());

// sample(demo);

function sample(callback){
    console.log("sample");
    callback();
}

function demo(){
    console.log("demo")
}

sample(demo);
