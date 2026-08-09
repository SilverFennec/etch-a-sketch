const container = document.querySelector('.container')
const gridSizeButton = document.querySelector('.gridSizeButton')
const log = document.querySelector('.log')

let sides = 16;

function generateGrid(sides) {
  for (let i = 0; i < sides; i++) {
    for (let j = 0; j < sides; j++) {
      const basis = 100 / sides + '%';
      let square = document.createElement('div')
      square.classList.add('squares')
      square.style.flexBasis = basis;
      container.appendChild(square)
    }
  }
  
  let squares = document.querySelectorAll('.squares')
  
  squares.forEach((squares) => {
    squares.addEventListener('mouseenter', (event) => squares.style.backgroundColor = 'yellow')
    }
  )
}

generateGrid(sides)

gridSizeButton.addEventListener('click', () => {
  sides = +prompt('enter a number', '16')
  
  container.textContent = '';
  log.textContent = `Grid size: ${sides}×${sides}`
  generateGrid(sides)
  } 
)
