const domTemplate = document.querySelector('.template')
const domContainer = document.querySelector('.list-group')
const render = (data, index) => {
  let clone = domTemplate.cloneNode(true)
  clone.style.display = 'block'
  clone.querySelector('.text').innerHTML = `(第${index + 1})条: ${data.title}`
  clone.querySelector('.avatar').src = data.author.avatar_url
  clone.querySelector('.badge').innerHTML = data.tab
  clone = domContainer.appendChild(clone)
  clone.scrollIntoView({
    behavior: 'smooth'
  })
}

function launch() {
  const worker = new Worker('./worker.js')

  worker.onmessage = message => {
    console.log(message.data)
    message.data.data.forEach((item, index) => {
      setTimeout(() => {
        render(item, index)
      }, 1000 * index)
    })
  }

  worker.onerror = error => {
    throw error
  }

  // setInterval(() => worker.postMessage('打我啊！'), 1500)
}

launch()