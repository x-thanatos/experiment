var worker = new SharedWorker('worker.js');
worker.port.onmessage = function(e) {
  console.log(e.data);
}

var request = {
  from: 'main',
  description: '我要一百万！'
}
worker.port.postMessage(request)