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
.addEventListener('click',() =>{
    Promise.all([
        slowEcho('I waited 1 second!', 1000),
        slowEcho('I waited 2 seconds!', 2000),
        slowEcho('I waited 3 seconds!', 3000)
    ]).then(([result1, result2, result3]) => {
        console.log(result1);
        console.log(result2);
        console.log(result3);
    }).catch((err) => {
        console.log(err);
    });
});









// function slowEcho(message, delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let random = Math.floor(Math.random() * 10);
//             if(random %2 === 0) {
//                 resolve(message);           
//             } else {
//                 let err = new Error('Something odd happened')
//                 reject(err)
//             }
//         }, delay);
//     });
// }

// document.getElementById('btn')
// .addEventListener('click',() =>{
//     Promise.all([
//         slowEcho('I waited 1 second!', 1000),
//         slowEcho('I waited 2 seconds!', 2000),
//         slowEcho('I waited 3 seconds!', 3000)
//     ]).then((value) => {
//         let result1 = value[0];
//         let result2 = value[1];
//         let result3 = value[2];
//         console.log(result1);
//         console.log(result2);
//         console.log(result3);
//     }).catch((err) => {
//         console.log(err);
//     });
// });







// function slowEcho(message, delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let random = Math.floor(Math.random() * 10);
//             if(random %2 === 0) {
//                 resolve(message);           
//             } else {
//                 let err = new Error('Something odd happened')
//                 reject(err)
//             }
//         }, delay);
//     });
// }

// document.getElementById('btn')
// .addEventListener('click',() =>{
//     Promise.all([
//         slowEcho('I waited 1 second!', 1000),
//         slowEcho('I waited 2 seconds!', 2000),
//         slowEcho('I waited 3 seconds!', 3000)
//     ]).then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.log(err);
//     });
// });
