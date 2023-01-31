const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')
const toggleTheme = document.getElementById("toggle-theme")
const toggleIcon = document.getElementById("toggle-icon")
const toggleText = document.getElementById("toggle-text")

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

toggleTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    if(toggleIcon.src.includes('moon.svg')){
      toggleIcon.src='/assets/sun.svg';
      toggleText.textContent='light mode';
    }
    else{
      toggleIcon.src='/assets/moon.svg'
      toggleText.textContent='dark mode'
    }
  })