setInterval(()=> {
    const time = document.querySelector('#time')

    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    let day

    if(minutes < 10){
        minutes = '0' + minutes
    }

    if(hours >= 12){
        day = 'PM'
        hours = hours - 12
    }else{
        day = 'AM'
    }

    if(seconds < 10){
        seconds = '0' + seconds
    }

    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day
    //console.log(time)
})