const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  // Esto es para un ojo, para dos ojos hacer un ciclo for que recorra
  //entre los elementos del arreglo "balls".
  //Observar como arriba el método usado es "getElementsByClassName", 
  //se está usando "Elements" para hacer un handle de todos los elementos
  //de la misma clase "ball". 
  //Con esto se actualiza solamente la parte del centro de los ojos y no
  //toda la estructura incluyendo blanco.

  for (let i = 0; i < 2; i++){
    //balls[0].style.left = x;
    //balls[0].style.top = y;
    //balls[0].transform = 'translate(-' + x + ',-' + y + ')';

    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  }
};
