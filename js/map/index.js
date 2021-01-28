function createMarker(point) {
    return new AMap.Marker(point)
}

let lastTime = 0

function init() {
    AMap.plugin('AMap.Geocoder')
    const geocoder = new AMap.Geocoder({ city: '全国' })
    AMapUI.setDomLibrary($)
    const map = new AMap.Map('map', {
        center: [117.000923, 36.675807],
        zoom: 11
    })
    const dom = {
        output: $('#output'),
        input: $('#input')
    }

    dom.input.keyup(function (e) {
        lastTime = e.timeStamp

        const timer = setTimeout(function () {
            //利用event的timeStamp来标记时间，这样每次的keyup事件都会修改lastTime的值，注意lastTime必需为全局变量
            if (lastTime - e.timeStamp === 0) {
                //如果时间差为0（也就是你停止输入1s之内都没有其它的keyup事件发生）则做你想要做的事
                //根据自己的需要进行校验
                const { value } = e.target
                geocoder.getLocation(value, function(status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        console.log(result)
                        const existMarkers = map.getAllOverlays('marker')
                        map.remove(existMarkers)
                        map.add(createMarker({ position: result.geocodes[0].location }))
                        map.setCenter()
                    }
                })
            }
        }, 1000)
        if (e.keyCode === 13) {
            const { value } = e.target
            clearTimeout(timer)
            geocoder.getLocation(value, function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    console.log(result)
                    const existMarkers = map.getAllOverlays('marker')
                    map.remove(existMarkers)
                    map.add(createMarker({ position: result.geocodes[0].location }))
                }
            })
        }
    })

    map.on('click', function (e) {
        const existMarkers = map.getAllOverlays('marker')
        map.remove(existMarkers)
        map.add(createMarker({ position: e.lnglat }))
        geocoder.getAddress(e.lnglat, function (status, result) {
            if (status === 'complete' && result.info === 'OK') {
                dom.output.val(result.regeocode.formattedAddress)
            }
        })
    })
    AMapUI.loadUI(['control/BasicControl'], function (BasicControl) {
        //缩放控件
        map.addControl(new BasicControl.Zoom({
            position: 'rb' //right bottom，右下角
        }))
    })
}

// 加载地图资源
function loadApi(url) {
    const script = document.createElement('script')
    script.src = url
    document.head.appendChild(script)
    return new Promise((resolve) => {
        script.onload = () => {
            resolve(true)
        }
    }, (reject) => {
        script.onerror = () => reject(new Error('AMap service load failed'))
    })
}

function launch() {
    const AMapUrl = 'https://webapi.amap.com/maps?v=1.4.8&key=143ca80e0f359332686460f001ee89ce'
    const AMapUIUrl = 'https://webapi.amap.com/ui/1.0/main.js'
    return loadApi(AMapUrl)
        .then(() => loadApi(AMapUIUrl))
        .then((res) => {
            if (res) {
                init()
            }
        })

}

launch()
