
const run = setInterval(clock, 1000)

function clock(){ 
    const data = new Date()
    const hour = data.getHours()
    const min = data.getMinutes()
    const sec = data.getSeconds()

    console.log(`h: ${hour} m: ${min} s: ${sec}`)

    ponteiro()

    function ponteiro(){
        const hr = document.getElementById('hr')
        const mn = document.getElementById('mn')
        const sc = document.getElementById('sc')
    
        hr.style.transform = 'rotate('+sec+'deg)'
    }
}


function parar(){
    clearInterval(run)
}