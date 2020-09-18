const colors = ['green', 'red', 'yellow', 'blue'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

let getRandom = () => Math.floor(Math.random() * colors.length);

btn.addEventListener('click', () => {
  const randomNumber = getRandom();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
