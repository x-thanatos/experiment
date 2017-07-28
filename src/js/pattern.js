/**
 * Created by Jesson on 2017-07-13.
 */
(function () {
    const regex0 = /jes{2,5}on/
    const regex1 = /ab[cdef]{2}/
    const regex2 = /[a-z][A-Z][0-9]/
    const regex3 = /[^1-9][A-Z]/
    const regex4 = /[a-z]{1}|[0-9]{1}|\s{1}/
    const regex5 = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/g
    const regexTime = /(([0-1][0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9])/
    const regexHtmlAttr = /((data|id)="\w+")|(class="(\s?\w+\s?)+")/g
    const regexHtmlContent = />.*<\/(\w+)(-\w+)*>/g

// console.log(regex0.test('jesson'))
// console.log(regex1.test('abcf'))
// console.log(regex2.test('aA1'))
// console.log(regex3.test('0A'))
// console.log(regex4.test(' '))
// console.log(regex5.test('#aff'))

    const html = '<my-own-div id="panel" data="opened" class="shadow black static">打我啊!</my-own-div>'
    let result
// while ((result = regexHtmlAttr.exec(html)) !== null) {
//     console.log(result, regexHtmlAttr.lastIndex)
// }

// console.log(html.match(regexHtmlAttr))
    console.log(html.match(regexHtmlContent)[0].replace(/>/, '').replace(/<\/(\w+)(-\w+)*>/, ''))

    const date = new Date().toString()
    const getTime = () => {
        const _date = new Date().toString()
        console.log(_date.match(regexTime)[0])
        // console.log(regexTime.exec(_date)[0])
    }
// getTime()
// setInterval(getTime, 1000)
}())
