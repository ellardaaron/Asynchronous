function slowEcho(message, delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            if(random %2 === 0) {
                resolve(message);           
            } else {
                let err = new Error('Something odd happened')
                reject(err)
            }
        }, delay);
    });
}
document.getElementById('btn')
.addEventListener('click', async () =>{
    try {
        let message = await slowEcho('Hello World!', 1000);
        console.log(message);
    } catch (error) {
        console.log(error);
    }
});




// document.getElementById('btn')
// .addEventListener('click', async () =>{
//     let [res1, res2, res3] = await Promise.all([
//         slowEcho('I waited 1 second!', 1000),
//         slowEcho('I waited 2 seconds!', 2000),
//         slowEcho('I waited 3 seconds!', 3000)
//     ]);
//     console.log(res1);
//     console.log(res2);
//     console.log(res3);
// });




// document.getElementById('btn')
// .addEventListener('click', async () =>{
//     let someMessage = await slowEcho ('I waited 1 second!', 1000);
//     console.log(someMessage);
//     someMessage = await slowEcho('I waited 2 seconds!', 2000);
//     console.log(someMessage);
//     someMessage = await slowEcho ('I waited 3 seconds!', 3000);
//     console.log(someMessage);
// });