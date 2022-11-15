var app = new Vue({
  el: '#app',
  data: {
    todoList: [
      {
        testo: 'comprare il pane',
        done: false
      },
      {
        testo: 'comprare il latte',
        done: false
      }
    ],
    todoDone: []
  },
  beforeUpdate() {
    //entra quando l'applicativo vue controlla il dom e i dati e i componenti si modificano
    this.todoList.forEach( (elem, index)=>{
      if( elem.done == true ){
        this.todoDone.push( elem );
        this.todoList.splice( index,1 );
      }
    } );
  },

  methods: {
    rimuovoElemento(index, elem){
      //Rimuovi oggetto dall'array
      //splice: rimuove un elemento di un array grazie alla posizione e ne elimina tanti quanti gli dico dall'elemento trovato
      console.log( index )
      // this.todoList.splice( index, 1 );
      if( elem.done == true ){
        this.todoDone.splice( index, 1 );
      } else {
        this.todoList.splice( index, 1 );
      }
    },
    todoCompleted(index, elem){
      //modifico lo stato della proprietà

      if( elem.done == false ){
        elem.done = true;
      } else {
        elem.done = false;
      }

      //versione abbreviata del if
      //elem.done = !elem.done;

    }
  }
})
