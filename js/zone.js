/**
 * Created by Jesson on 2017-07-12.
 */
require('zone.js')

Zone.current.fork({}).run(() => {
    Zone.current.param = true
    setTimeout(() => console.log(`inside: ${Zone.current.param}`))
})

console.log(`outside: ${!!Zone.current.param}`)
