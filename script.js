const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')
const toggleTheme = document.getElementById("toggle-theme")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")

//dark mode
button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if(toggleIcon.textContent.includes('toggle_on')){
      toggleIcon.textContent="toggle_off";
      toggleText.textContent='light mode';
    }
    else{
      toggleIcon.textContent="toggle_on"
      toggleText.textContent='dark mode'
    }
  })

const typed = new Typed(".typed", {

  strings : ['<i class="titulo"> Gonzalo Mina </i>',
             '<i class="titulo"> FrontEnd Dev </i>']
  ,
	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '___', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
})
