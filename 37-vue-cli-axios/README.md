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
