/**
 * Created by Jesson on 2017-07-13.
 */
const regex0 = /jes{2,5}on/
const regex1 = /ab[cdef]{2}/
const regex2 = /[a-z][A-Z][0-9]/
const regex3 = /[^1-9][A-Z]/
const regex4 = /[a-z]{1}|[0-9]{1}|\s{1}/
console.log(regex0.test('jesson'))
console.log(regex1.test('abcf'))
console.log(regex2.test('aA1'))
console.log(regex3.test('0A'))
console.log(regex4.test(' '))

const date = new Date().toString()
console.log(date.replace(/\s/g, ''))