let horas = new Date();
let hora = (horas.getHours() - 2);
let cont = 0
console.log(cont)
document.write(hora)
if (hora < 10) {
    document.body.style.backgroundImage = "url('imgs/bg1.jpg')";
}
else if (hora < 20) {
    document.body.style.backgroundImage = "url('imgs/bg2.jpg')";
}
else {
    document.body.style.backgroundImage = "url('imgs/bg3.jpg'";
}
const tela = document.querySelector('#mudar');
const button = document.querySelector('#ligar');

button.addEventListener('click', () => {
    cont++
    switch (cont) {
        case 1:
            tela.src = 'imgs/ligado.png'
            break

        case 2:
            tela.src = 'imgs/desligado.png'
            break
    }
    if (cont == 2) {
        cont = 0
    }
})

console.log(cont)