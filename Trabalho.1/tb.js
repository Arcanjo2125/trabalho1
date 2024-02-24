/*const bto1 = document.getElementById('bto1');
const bto2 = document.getElementById('bto2');
const bto3 = document.getElementById('bto3');
const bto4 = document.getElementById('bto4');

const img_galaxia = document.getElementById('img_galaxia');
const img_sol = document.getElementById('img_sol');
const img_Terra = document.getElementById('img_Terra');
const img_jupiter =document.getElementById('img_Jupiter');
const img_Marte = document.getElementById('img_Marte');

bto1.addEventListener('click', () => {
  img_galaxia.src = 'Galaxia';
  img_sol.src = 'Sol';

  setTimeout(() => {
    img_galaxia.src = 'Galaxia';
    img_sol.src = 'Sol';
  }, 5000);
});


bto2.addEventListener('click', () => {
    img_sol.src = 'Sol';
    img_Terra.src = 'Planeta terra';
  
    setTimeout(() => {
     img_sol.src = 'Sol';
     img_Terra.src = 'Planeta terra';
    }, 5000);
  });


  bto3.addEventListener('click', () => {
    img_Terra.src='Planeta Terra';
    img_jupiter.src='Jupiter';

    setTimeout(() => {
         img_Terra.src = 'Planeta terra';
         img_jupiter.src='Jupiter';
    }, 5000);
  });*/

  function sol(){
    document.getElementById("img_galaxia").src = "sol.jpg"
  }

  function Terra(){
    document.getElementById("img_galaxia").src = "terra.jpg"
  }

  function jupiter(){
    document.getElementById("img_galaxia").src = "jupiter.jpg"
  }

  function marte(){
    document.getElementById("img_galaxia").src = "marte.jpg"
  }