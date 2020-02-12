// function slowEcho(message, delay) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// }

// document.getElementById('btn')
// .addEventListener('click',() =>{
//     slowEcho('Hello World!', 1000)
//     .then((a) => {
//         console.log(a);
//     }).catch((e) => {
//         console.log(e);
//     });
// });

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
    slowEcho('Hello World!', 1000)
    .then((a) => {
        console.log(a);
    }).catch((e) => {
        console.log('An error occurred!')
        console.log(e);
    });
});

//Using static promise methods
//Long method:
// let p = new Promise((resolve, reject) => {
//     resolve('Hello');
// });

// p.then((value) => {
//     console.log(value);
// });

//short method using static promise
let p = Promise.resolve('Hello!');

let q = Promise.reject(new Error('Uh oh!'));

p.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});

q.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
})