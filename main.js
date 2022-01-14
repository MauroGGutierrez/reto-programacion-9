const main = () => {
  const cuadrado = document.querySelector('div.cuadro');
  let acc = 0;
  // cuadrado.style.marginLeft = '-1rem'
  document.addEventListener('keydown', function (event) {
    if (event.which === 39) {
      acc += 1;
    } else if (event.which === 37) {
      acc -= 1;
    }
    cuadrado.style.marginLeft = acc + 'rem';
  });
};

main ()
// el string click me indica que va a funcionar la funcion, cuando le demos click