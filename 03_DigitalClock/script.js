const clock = document.querySelector('#clock')

// const time = new Date()
// console.log(time.toLocaleTimeString())

setInterval(function () {
    const time = new Date()
    // console.log(time.toLocaleTimeString())
    clock.innerHTML = time.toLocaleTimeString() 
}, 1000)

// Koy pn activity ne repeat karavva mate setInterval( function(){}, Time) no use karva ma ave che 