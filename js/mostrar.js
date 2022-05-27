function mostrar(input)
const imagenes = document.querySelectorAll('.mapa')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')

imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('img'));
    })
});
{
    var img=document.getElementById("img")
    if(input.value=="ocultar")
    {
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
        input.value="mostrar"
    }
    else
    {
        img.style.visibility="visible"
        input.value="ocultar"
    }
}
