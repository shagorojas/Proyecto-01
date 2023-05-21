const imagenes = document.querySelectorAll('.img-gallery')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const menuClose = document.querySelector('.menu');
const menuDownload = document.querySelector('.download');

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        //alert("Auch me dolio")
        //console.log(imagen.getAttribute('src')) Con esta linea me muestra en consola la ubicacion de cada elemento de la img-gallery
        aparecerImagen(imagen.getAttribute('src')); //Con esta linea me asigna un src a mi imagen-light
        console.log(imagen.getAttribute('src'))
    })
})
contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenesLight && e.target !== menuDownload){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        //menuDownload.classList.toggle()
        menuClose.style.opacity = '1'
    }
})

const aparecerImagen =  (imagen) => {
    imagenesLight.src = imagen; //
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')//Agrego la clase showImage a agregar-imagen
    menuClose.style.opacity = '0'

}