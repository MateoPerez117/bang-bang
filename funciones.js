function jugar() {
    ponerBGTransicion();
    setTimeout(function() {
        window.location.assign ("personaje.html");
    },2000);
    var audio = new Audio('adriana-salte.mp3');
    audio.play();
}

function ponerBGTransicion() {
    document.querySelector('.bg-transicion').classList.add('bg-transicion-show');
    
}

function quitarBG() {
    document.querySelector('.bg-transicion').style.backgroundColor = 'transparent';
    setTimeout(function() {
        document.querySelector('.bg-transicion').classList.remove('bg-transicion-show');
    }, 1000);
}