var systemguess = Math.floor(Math.random() * 100) + 1
var guess = 0

function guessN() {
    var num = document.getElementById('in').value
    if (num < 1 || num > 100 || num === '') {
        console.log('Input not valid!!');
    } else {
        guess++
        var num = parseInt(document.getElementById('in').value)
        if (num === systemguess) {
            console.log('Right');
            document.getElementById('out').innerHTML = 'Woww you guessed it champ!!'
        } else if (num > systemguess) {
            console.log('Guess lower');
            document.getElementById('out').innerText = 'Lets go lower!!'
        } else {
            console.log('Guess higher');
            document.getElementById('out').innerText = 'Lets go higher!!'
        }
    }
}