(function (param) {
    console.log(param)
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('s')
        }, 3000)
    })
    promise.then(res=>console.log(res))
})('start')
