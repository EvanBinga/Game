
const openPopUp = document.getElementById('open_pop');
const clousePopUp = document.getElementById('popap-close');
const popUp = document.getElementById('popap');
const right = document.getElementById('right');
const left = document.getElementById('left');
const win = document.getElementById('win');
const loss = document.getElementById('loss');
const play = document.getElementById('but');
const lossClous = document.getElementById('loss-close');
const winClous = document.getElementById('win-return');
const lossReturn = document.getElementById('loss-return');
var count = 13

    window.onload = function() {
       popUp.classList.add('active');
      };
    clousePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})


var random = Math.round(Math.random() * 100);
function getRandom() {
    var num = document.getElementById('form').value;

     



    

    if (count == 0) {
        loss.classList.add('active');
    
        lossClous.addEventListener('click', () => {
            window.location.reload(true);
            lossClous.addEventListener.remove('active')
        })
    }

    
    count--;


    if (num == random) {
        win.classList.add('active');

        winClous.addEventListener('click', () => {
            window.location.reload(true);
            winClous.addEventListener.remove('active')
        })

        }


        
      
        else if(num > random) {
            left.classList.add('active');
            right.classList.remove('active');
        }
        
        else if(num < random) {
            right.classList.add('active');
            left.classList.remove('active');
        }

        else if(num < random) {
            right.classList.add('active');
            left.classList.remove('active');
        }

    }

getRandom();