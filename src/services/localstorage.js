import uuid from "react-uuid";

/*Instalo react-uuid y lo importo para que auto-genere un id para cada pelicula*/

//Servicios

/*Con esta funcion primero creo un local storage con el nombre peliculasV1 si es que no existe aun.
Si ya existe, entonces extraigo todos sus elementos, los convierto a objetos de tipo JSON, y los
almaceno en una nueva lista. Finalmente devuelve la lista*/


export const getListPeliculas = ()=>{

    if(!localStorage["peliculasV1"]){
       localStorage["peliculasV1"]= JSON.stringify([]);
    }

    let peliculas = JSON.parse(localStorage["peliculasV1"]);

    return peliculas;

}


/*Esta funcion permite añadir una pelicula al local storage. Primero, recibe un objeto 
pelicula como parametro. Luego, se almacenan todas las peliculas del local storage en una variable
llamada peliculas, que ahora es un array de objetos. Utilizando la funcion push(), se añade 
un nuevo objeto con un id auto-generado con la funcion uuid() y los valores de la pelicula
recibida por parametro. Finalmente, se actualiza el local storage, enviandole el nuevo array
de objetos convertido a string.*/

export const addPelicula = (pelicula)=>{

   let peliculas = getListPeliculas();
   peliculas.push({id:uuid(),...pelicula});

   localStorage["peliculasV1"] = JSON.stringify(peliculas);

}

/*Esta funcion permite obtener una pelicula por id. Primero, recibe un id como
parametro. Luego se obtienen las peliculas del local storage y se almacenan en
una variable llamada peliculas, que ahora es un array de objetos. Luego se utiliza
la funcion find() para buscar la pelicula cuyo id coincida con el id que se recibió 
como parametro y se almacena en una variable llamada pelicula. Finalmente devuelve
la pelicula.*/

export const getPeliculaById = (id)=>{
   let peliculas = getListPeliculas()
   let pelicula = peliculas.find((pelicula)=>pelicula.id===id);
   return pelicula;
}



 


