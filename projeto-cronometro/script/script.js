window.onload = function() {
    var minutos = 0
    var segundos = 0
    var milisegundos = 0
    var appendMinutos = document.querySelector('#minutos')
    var appendMilisegundos = document.querySelector('#milisegundos')
    var appendSegundos = document.querySelector('#segundos')
    var start = document.querySelector('.start')
    var stop = document.querySelector('.stop')
    var reset = document.querySelector('.reset')
    var Interval

    start.onclick = function() {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 1)
    }

    stop.onclick = function() {
        clearInterval(Interval)
    }

    reset.onclick = function() {
        clearInterval(Interval)
        milisegundos = "00"
        segundos = "00"
        minutos = "00"
        appendMilisegundos.innerHTML = milisegundos
        appendSegundos.innerHTML = segundos
    }

    function startTimer() {
        milisegundos++
        
        if (milisegundos <= 9) {
            appendMilisegundos.innerHTML = "0" + milisegundos
        }

        if (milisegundos > 9) {
            appendMilisegundos.innerHTML = milisegundos
        }

        if (milisegundos > 99) {
            console.log("segundos")
            segundos++
            appendSegundos.innerHTML = "0" + segundos
            milisegundos = 0
            appendMilisegundos.innerHTML = "0" + 0
        }
        
        if (segundos > 9) {
            appendSegundos.innerHTML = segundos
        }

        if (segundos == 59) {
            console.log("minutos")
            minutos++
            appendMinutos.innerHTML = "0" + minutos
            segundos = 0
        }
    }
}