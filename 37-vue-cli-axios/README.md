## Come creare un progetto vue CLI + repository abbinata di github
  - Creare una repository vuota su github
  - Clonarla sul pc con vs code
  - aprire il terminale dentro la cartella di lavoro
  - ``` vue create . ```
  - ``` npm run serve ```

## Se vogliamo bootstrap
  - Lancio il comando: ``` npm install bootstrap@5.2.3 ``` all'interno del terminale del progetto
  - All'interno del file 📃"main.js" scrivo i due codici:
    ```
    import 'bootstrap/dist/css/bootstrap.min.css'
    import 'bootstrap/dist/js/bootstrap.min.js'
    ```

## se vogliamo utilizzare axios
  - Lancio il comando: ``` npm install axios ``` all'interno del terminale del progetto
  - All'interno del file .vue dove vogliamo utilizzare axios, inseriamo l'import:
    ``` import axios from 'axios' ```
  - utilizzo poi axios all'interno del componente dove l'ho importato all'interno di mounted() created() se vogliamo fare un caricamnto delle api al' caricamento della pagina oppure all'interno di method() se vogliamo richiamarla come funzione e poi utilizzarla in base alla necessità

## se vogliamo utilizzare Fontawesome 6
  - I passaggi di installazione vengono eseguiti nel terminale della cartella del progetto
  - Installiamo i core di fontawesome 6.2: ``` npm i --save @fortawesome/fontawesome-svg-core ```
  - installiamo gli stili delle icone che utilizzeremo:
    ```
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/free-brands-svg-icons
    ```
  - Installiamo fontawesome come componenti: ```npm i --save @fortawesome/vue-fontawesome@latest-2```

  - Aprire poi il file main.js e scrivere all'interno:
  ```
    /* import the fontawesome core */
    import { library } from '@fortawesome/fontawesome-svg-core'

    /* import font awesome icon component */
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    /* import specific icons */
    import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
    /*Import icone regular */
    import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

    /* add icons to the library */
    library.add(faUserSecret)

    /* add font awesome icon component */
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  ```

  - ATTENZIONE: se la stessa icona viene importata con due stili diversi ad esempio: regular e solid, non possiamo usare lo stesso nome per le due icone ma dobbiamo usare un rieticchetamento con "as", il codice diverrà:
  ```
    /* import specific icons */
    import { faUserSecret as faUserSecretSolid } from '@fortawesome/free-solid-svg-icons'
    /*Import icone regular */
    import { faUserSecret as faUserSecretRegular } from '@fortawesome/free-regular-svg-icons'

    /* add icons to the library */
    library.add(faUserSecretSolid, faUserSecretRegular)
  ```

  - Nelle righe di codice:
  ```
   /* import specific icons */
    import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

    /* add icons to the library */
    library.add(faUserSecret)
  ```
  Dobbiamo modificare il nome delle icone all'interno delle parentesi con il nome delle icone che vogliamo usare di fontawesome, con l'esempio dle codice sopra stiamousando l'icona "fa-user-secret"
  Se vogliamo usare l'icona della lente d'inngradimento scriveremo:
    ```
   /* import specific icons */
    import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

    /* add icons to the library */
    library.add(faUserSecret, faMagnifyingGlass)
  ```

  - Per utilizzare nel codice del componente l'icona dobiamo inserirle con il codice di fontawesome in stile componente:
  ```
  <template>
      <span class="input-group-text" id="basic-addon1">
       <!-- Icona lente d'ingrandimento di fontawesome -->
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </span>
  </template>

  ```
