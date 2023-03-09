let mario = document.querySelector('.mario')
let cano = document.querySelector('.cano')
let start = document.getElementById('start')

start.addEventListener('click', () => {
    const jump = () => {

        mario.classList.add('jump')


        setTimeout(() => {

            mario.classList.remove('jump');


        }, 500);
    }

    const loop = setInterval(() => {
        const canoposi = cano.offsetLeft;
        const marioposi = +window.getComputedStyle(mario).bottom.replace('px', '');
        if (canoposi <= 70 && canoposi > 0 && marioposi <= 80) {
            cano.style.animation = 'none'
            cano.style.left = `${canoposi}px`

            //mario.style.animation = 'none'
            mario.style.bottom = `${marioposi}px`

            mario.src = 'templates/morrendogif.gif'
            mario.style.widht = '40px'
            mario.classList.add('ouver')
                //mario.style.visibility = "hidden"


            clearInterval(loop)
            start.onclick = () => {
                window.location.reload()
            }
        }
    }, 10)

    document.addEventListener('keydown', jump)

})