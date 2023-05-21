const menu = document.querySelector('.menu');
const panel = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(panel);

menu.addEventListener('click',() =>{
    /*alert("Click");*/
    panel.classList.toggle("spread")
})
window.addEventListener('click', e=>{
    if(panel.classList.contains('spread') && e.target != panel && e.target != menu ){
        panel.classList.toggle('spread')
    }
})