
const cards = document.querySelectorAll('div.card')
const gbox = document.getElementsByClassName('gamebox')[0]

const _h1 = document.getElementById('alirezah1')
const _h2 = document.getElementById('alirezah2')
const buttonstart = document.getElementById('buttonclick')


let click1
let click2
let checkrotate = false
let lock = true

function play(){
    buttonstart.classList.add('transy')
    _h1.classList.add('transy')
    _h2.classList.add('transy')
    setTimeout(() => {
        buttonstart.style.display="none"
        _h1.style.display="none"
        _h2.style.display="none"
    }, 1000);
    

    setTimeout(() => {
        cards.forEach((v, i) => {
            gbox.classList.add('startboxanim')
            v.classList.add('anim1')
        
            setTimeout(() => {
                v.classList.remove('anim1')
            }, 9000);
        
        
            let randomnum = Math.floor(Math.random() * 12)
            v.style.order = randomnum
            v.addEventListener('click', () => {
                newFunction(v);
            })
        });
        setTimeout(() => {
          lock=false
        }, 9000);
        function newFunction(v) {
            if (lock) return;
            console.log(lock);
            v.classList.add('rotate');
            if (!checkrotate) {
                // avalin click //
                checkrotate = true;
                click1 = v;
            } else {
                // dovomin click 
                checkrotate = false;
                click2 = v;
                console.log(click1.dataset.picture);
                console.log(click2.dataset.picture);
        
                //   match or not match
                if (click1.dataset.picture === click2.dataset.picture) {
                    // win item             
                    lock = true
        
                    setTimeout(() => {
                        click1.style.tranzition = '4s'
                        click2.style.tranzition = '4s'
                        click1.classList.add('transy')
                        click2.classList.add('transy')
                        lock = false
                    }, 900);
        
                } else {
        
                    lock = true
                    setTimeout(() => {
                        click1.classList.remove('rotate');
                        click2.classList.remove('rotate');
                        lock = false
                    }, 1500);
                }
            }
        }
        
    }, 1000);
    
  

}





