var worker = new Worker('worker.js');
worker.onmessage = function (event) {
  document.getElementById('result').innerHTML = event.data;
};

// var container = document.querySelector('.container')
// for (let i = 0; i < 10000; i++) {
//   setTimeout(() => {
//     container.innerHTML += ' 打我啊 '
//   }, 100 * i)
// }

// var n = 1;
// search: while (true) {
//   n += 1;
//   for (var i = 2; i <= Math.sqrt(n); i += 1)
//     if (n % i == 0)
//       continue search;
//   // found a prime!
//   document.getElementById('result').innerHTML = n;
// }

document.querySelector('.target').innerHTML = '打我啊'