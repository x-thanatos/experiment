function after2Seconds(value, time) {
    return new Promise((resolve, reject) => {
        if (value < 0) {
            reject('error')
            return
        }
        setTimeout(() => resolve(value), time)
    })
}

async function add(a) {
    const x = await after2Seconds(2, 1000)
    const y = await after2Seconds(3, 1000)
    return a + x + y
}

add(1).then(v => console.log(v))

