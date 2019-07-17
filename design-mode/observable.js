class Observable {
    constructor() {
        this.stack = {}
    }

    subscribe(event, callback) {
        if (typeof callback !== 'function') {
            return
        }
        if (!this.stack[event]) {
            this.stack[event] = []
        }
        this.stack[event].push(callback)
    }

    unsubscribe(event, callback) {
        this.stack[event] = this.stack[event].filter(fn => fn !== callback)
    }

    dispatch(event, ...args) {
        this.stack[event].forEach((fn) => {
            fn.apply(this, args)
        })
    }
}

(() => {
    const observer = new Observable()
    let count = 0
    let interval = -1
    const response = (...args) => {
        console.log('subscribe add event', args)
    }
    observer.subscribe('add', response)
    interval = setInterval(() => {
        count += 1
        if (count > 3) {
            observer.unsubscribe('add', response)
            clearInterval(interval)
        }
        observer.dispatch('add', 1, 2, 3)
    }, 1000)
})()
