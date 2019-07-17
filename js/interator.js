(function () {
    const log = (message) => {
        console.log(message)
    }

    const object = { a: 1, b: 2, c: 3 }
    const string = 'hello'
    const array = [1, 2, 3]
    const set = new Set([1, 2, 3])
    const map = new Map()

    log('for in object start')
    for (let item in object) {
        log(item)
    }
    log('for in object end')
    log('---------------------')

    log('for in array start')
    for (let item in array) {
        log(item)
    }
    log('for in array end')
    log('---------------------')

    log('------------------------------------------------------')


    log('for of string')
    for (let item of string) {
        log(item)
    }
    log('for of array string')
    log('---------------------')

    log('for of array')
    for (let item of array) {
        log(item)
    }
    log('for of array end')
    log('---------------------')

    log('for of set start')
    for (let item of set) {
        log(item)
    }
    log('for of set end')
    log('---------------------')
}())
