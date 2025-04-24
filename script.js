function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

   if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
   } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while(c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        // item.value = `tab${c}`
        tab.appendChild(item)
        c++
     }
   }
}

// Modo Dark/Light
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function toggleTheme() {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Carregar tema salvo
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

themeToggle.addEventListener('click', toggleTheme);