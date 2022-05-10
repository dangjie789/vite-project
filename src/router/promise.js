/* function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms, 'cuowu');
    });
}

timeout(100).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

async function timeout1() {
    return 'Hello world'
}

timeout1().then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
}) */

console.log(123)
setTimeout(() => {
    console.log(222)
}, 100)
console.log(333)