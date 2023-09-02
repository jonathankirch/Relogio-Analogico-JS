
const run = setInterval(clock, 1000)

function clock(){ 
    const data = new Date()
    const hour = data.getHours()*30
    const min = data.getMinutes()*6
    const sec = data.getSeconds()*6
    
    const hr = document.getElementById('hr')
    const mn = document.getElementById('mn')
    const sc = document.getElementById('sc')
    
    sc.style.transform = 'rotate('+sec+'deg)'
    mn.style.transform = 'rotate('+min+'deg)'
    hr.style.transform = 'rotate('+hour+'deg)'
}