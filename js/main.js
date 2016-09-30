let bgs = document.querySelectorAll('section'),
    p = []
function onScroll() {

    let pageTop = window.scrollY,
        pageBottom = pageTop + window.innerHeight

    bgs.forEach((el, i) => {
        if(el.hasAttribute('data-src')) {
            
            let pos = el.getBoundingClientRect()                
            p[i].visible = (pos.top < pageBottom && pos.bottom > 0)

            if(p[i].visible) {
   
                let heightToScreenRatio = window.innerHeight / el.clientHeight,
                    relativeToTop = 1 - (pos.bottom / el.clientHeight),
                    px = relativeToTop * el.clientHeight,
                    pct = 100 * (px / el.clientHeight) / heightToScreenRatio

                if(el.hasAttribute('data-offset')) pct -= el.getAttribute('data-offset')

                p[i].pct += (pct - p[i].pct) * .97
                el.style.backgroundPosition = '50% ' + -p[i].pct +'%'      
            }
        }
    })
}
function init() {
    bgs.forEach((el, i) => {
        p[i] = {
            pct: 0,
            visible: false
        }
        // pcts[i] = 0
        let src = el.getAttribute('data-src')
        if(src != null) el.style.backgroundImage = `url(${src})`
    })
    cycle()   
}

function cycle() {
    onScroll()
    requestAnimationFrame(cycle)
}

init()