const para = document.getElementsByTagName("p")

for (let i = 0; i<para.length;i ++){
    if(i%2===0){
        para[i].style.color ="blue"
    }
    else {
        para[i].style.color="green"
    }
}

para[para.length-1].style.fontWeight ="bold"


// create new element and append


const new_para = document.createElement("p")
new_para.textContent = "this is dianamically created paragraph";
console.log(new_para)

document.getElementById("content").append(new_para);


setInterval(() => {
    let date = new Date()
    console.log(date);

    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();

    document.getElementById("digi-clock").textContent = hour + ":" + min + ":" + second;

}, 1000)