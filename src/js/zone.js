/**
 * Created by Jesson on 2017-07-12.
 */
require('zone.js')

Zone.current.fork({}).run(() => {
    Zone.current.inside = true
    setTimeout(() => console.log(`inside: ${Zone.current.inside}`))
})

console.log(`outside: ${!!Zone.current.inside}`)
