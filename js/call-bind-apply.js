/**
 * Created by Jesson on 2017-07-12.
 */
(function () {
    const Jessie = {
        name: 'Jessie',
        say: function (age, gender = 'girl') {
            console.log(`I am ${this.name} and ${age} years old.[${gender}]`)
        }
    }
    const Tom = {
        name: 'Tom'
    }
    Jessie.say(23)
    Jessie.say.call(Tom, 24, 'boy')
    Jessie.say.apply(Tom, [24, 'boy'])
    const say = Jessie.say.bind(Tom)
    say(25, 'boy')
}())
