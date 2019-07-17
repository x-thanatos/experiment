var worker = new SharedWorker('worker.js');
worker.port.onmessage = function(e) {
  console.log(e.data);
}
var request = {
  from: 'sub',
  description: '我要一千万！'
}
worker.port.postMessage(request)