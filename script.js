const key = document.querySelectorAll("button");


const Random = () => {
    const keyArr = []
    key.forEach(e => {
        keyArr.push(e)
    })
    // return keyArr
    const randomBtn = keyArr[Math.floor(Math.random() * keyArr.length)];
    randomBtn.classList.add("jiggle")
    return randomBtn
}

console.log(Random());


// // const row = document.querySelectorAll(".row")
// // row.forEach(e=>{
// //     // console.log(e);
// // })


