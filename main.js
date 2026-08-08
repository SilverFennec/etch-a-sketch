const container = document.querySelector('.container')

let sides = 16;
const basis = 100 / sides + '%';

for (let i = 0; i < sides; i++) {
  for (let j = 0; j < sides; j++) {
    let square = document.createElement('div')
    square.classList.add('square')
    square.style.flexBasis = basis; 
    container.appendChild(square)
  }
}


const square = document.querySelectorAll('.square')

square.forEach((square) => {
  square.addEventListener('mouseenter', (event) => square.style.backgroundColor = 'yellow')
}
)
