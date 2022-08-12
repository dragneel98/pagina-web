
const toggleTheme = document.getElementById("toggle-theme")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")

//rootStyles contiene todas las variables de nuestro css
//la voy a utilizar junto con toggleColors para cambiar el color de la pagina
const toggleColors = document.getElementById("toggle-colors")
const rootStyles = document.documentElement.style

//lo que hace hace .toggle es funcionar como un iterruptor que le da la clase al elemento seleccionado si no lo tiene y se lo quita si lo tiene 
//y lo estoy usando para activar o desactivar el modo oscuro

toggleTheme.addEventListener('click', ()=>{
  document.body.classList.toggle('dark')
  if(toggleIcon.src.includes('moon.svg')){
    toggleIcon.src='sun.svg';
    toggleText.textContent='light mode';
  }
  else{
    toggleIcon.src='moon.svg'
    toggleText.textContent='dark mode'
  }
})
//desde aca se cambia el color de la pagina
toggleColors.addEventListener('click', (e)=>{
  
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
  console.log(e);
})
