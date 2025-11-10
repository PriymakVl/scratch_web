// Находим кота и флаг
const cat = document.getElementById('cat');
const flag = document.getElementById('flag');
// Начальные кординаты кота
let position = 10;

// "Когда флажок нажат" → идти 50 шагов
flag.onclick = goCat

function goCat() {
  position = position + 50;
  cat.style.left = position + 'px';
}