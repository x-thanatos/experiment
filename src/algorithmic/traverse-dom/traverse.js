/**
 * 广度优先遍历dom
 * @param node
 * @param callback
 */
const traversalDomBFS = (node, callback) => {
    let i = 0
    if (node != null) {
        callback(node)
        traversalDomBFS(node.nextElementSibling)
        i += 1
        node = nodes[i]
        traversalDomBFS(node.firstElementChild)
    }
}

/**
 * 深度优先遍历dom，实现0
 * @param node
 * @param callback
 */
const traversalDomDFS0 = (node, callback) => {
    callback(node)
    node = node.firstElementChild
    while (node) {
        traversalDomDFS0(node, callback)
        node = node.nextElementSibling
    }
}

/**
 * 深度优先遍历dom，实现1
 * @param node
 * @param callback
 */
const traversalDomDFS1 = (node, callback) => {
    if (node != null) {
        callback(node)
        var children = node.children
        for (let i = 0; i < children.length; i++) {
            traversalDomDFS1(children[i], callback)
        }
    }
}


((window, document) => {
    const zIndexPool = []
    const resolveZIndex = (el) => {
        console.log(el)
        const zIndex = Number(window.getComputedStyle(el).zIndex) || 0
        zIndexPool.push(zIndex)
    }
    document.addEventListener('DOMContentLoaded', () => {
        console.time('timer')

        // 遍历dom
        // traversalDomBFS(document.body, resolveZIndex)
        // traversalDomDFS0(document.body, resolveZIndex)
        traversalDomDFS1(document.body, resolveZIndex)

        // 使用原生api
        // const nodes = [...document.all]
        // const nodes = document.body.querySelectorAll('*')
        // nodes.forEach(resolveZIndex)

        console.log(Math.max(...zIndexPool))
        console.timeEnd('timer')
    })
})(window, document)
