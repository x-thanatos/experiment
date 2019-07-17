/**
 * Created by Jesson on 2017-07-18.
 */
const Rx = require('rxjs')
const object = {
    name: 'Tom',
    age: 100
}
// ---------
const subject = new Rx.Subject()

subject.subscribe({
    next: res => console.log(res)
})
subject.next('subject -- 1')
// ---------
const observable = new Rx.Observable((observer) => {
    observer.next('observable -- 1')
    observer.next('observable -- 2')
    setTimeout(() => {
        observer.next('observable -- 3')
        observer.complete()
    }, 1000)
})
const subscription = observable.subscribe({
    next: output => console.log(output),
    complete: () => subscription.unsubscribe()
})
// ----------
const observable1 = Rx.Observable.from([1, 2, 3])
const subscription1 = observable1.subscribe(subject)
subscription1.unsubscribe(subject)