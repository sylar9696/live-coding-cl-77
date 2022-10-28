const griglia = document.getElementById('griglia');
console.log( griglia );

//creiamo una funzione per creare un div quadrato dentro la griglia
function crearezioneQuadrato(){
  const div = document.createElement('div');
  div.classList.add('quadrato');
  return div;
}

console.log( crearezioneQuadrato() );


//inseriamo il quadrato creato dalla funzione nella griglia
// griglia.append( crearezioneQuadrato() );

//64 quadrati
for( let i = 0; i < 64; i++ ){

  let elementoCorrente = crearezioneQuadrato();
  console.log(elementoCorrente);

  elementoCorrente.addEventListener('click', function(){
      console.log(this);
      this.classList.toggle('active');
  })

  griglia.append( elementoCorrente );

}
