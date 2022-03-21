
const donMen = document.getElementById('paypal');
const cls = document.getElementById('close')

cls.onclick = function(){
    donMen.classList.remove('active')
}

donBtn = document.getElementsByClassName("theme-button donate");
for (var i = 0; i < donBtn.length; i++) {
    donBtn[i].addEventListener("click", function () {
        donMen.classList.toggle('active')
    });
}
