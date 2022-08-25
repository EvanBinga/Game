const popUp = document.getElementById('popap');
const clousePopUp = document.getElementById('popap-close');


window.onload = function() {
    popUp.classList.add('active');
   };
 clousePopUp.addEventListener('click', () => {
 popUp.classList.remove('active');
})