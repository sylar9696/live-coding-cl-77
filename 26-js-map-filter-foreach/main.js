const numeri = [ 2,6,8,3,12 ];
// const arr2 = [];
// for( let i=0; i < numeri.length; i++ ){

//   if( numeri[i] % 2 == 0 ){
//     arr2.push(numeri[i]);
//   }

// }

// console.log( numeri )
// console.log( arr2 )

// const pari = numeri.filter( (element) => {
//   if( element % 2 == 0 ){
//     return true
//   }
// } );

//versione abbreviata
// const pari = numeri.filter( (element) => {
//   if( element % 2 == 0 ) return true
// } );

//versione ancora piu abbreviata
const pari = numeri.filter( (element) => {
  return element % 2 == 0;
} );

console.log( pari )
