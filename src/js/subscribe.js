// 发布订阅模式
class SubscribeEvent {
    constructor() {
        this.pools = {}
    }

    subscribe(event, callback) {
        if (!this.pools[event]) {
            this.pools[event] = []
        }
        this.pools[event].push(callback)
    }

    dispatch(event, ...args) {
        let fns = this.pools[event]
        if (!fns || fns.length === 0) {
            return false
        }
        fns.forEach((fn) => {
            fn.apply(this, args)
        })
        return true
    }
}

const event = new SubscribeEvent()

event.subscribe('add', (...args) => {
    console.log(args)
    console.log('subscribe add event')
})

event.dispatch('add', Math.random())

event.subscribe('delete', (...args) => {
    console.log(args)
    console.log('subscribe delete event')
})

event.dispatch('delete', Math.random())
