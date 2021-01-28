const { default: axios } = require("axios")

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
    const x = await after2Seconds(2, 500)
    const y = await after2Seconds(3, 500)
    const p = []
    for (let index = 0; index < 10; index++) {
        p.push(axios.get("https://ip.tool.lu"))
    }
    const res = await axios.all(p)
    res.forEach(r => {
        console.log(r.data)
    });
    return a + x + y
}

add(1)
