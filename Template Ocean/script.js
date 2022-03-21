/*________RESPONISVE MENU FUNCTION_________*/
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e){
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('active')
        sidebar.classList.remove('active')
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}


/*________Click TO COPY CONTACT FORM_________*/
const btnCopy = document.querySelector('.btn-copy')
const txtCopy = document.querySelector('.mail h2');

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(txtCopy.textContent)
    alert("Email has been copied, thank you!")
})