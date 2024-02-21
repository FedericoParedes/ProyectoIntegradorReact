import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getListPeliculas } from "../services/localstorage";
import Pelicula from "../components/Pelicula"
import Buscador from "./Buscador";

//Componente Home

export default function Home(){

   //Se crea un hook para establecer y modificar el estado de un array de peliculas    

    const [peliculas, setPeliculas] = useState([])


 /* implementa la funcion useEffect para actualizar la variable de estado de peliculas,
 enviandole un array de ocho peliculas cada vez que se carga el componente*/

     useEffect(()=>{

      //En este primer array se almacenan las peliculas del local storage 
     
      let listaPeliculas = getListPeliculas();

      //En este segundo array se almacenarán las peliculas filtradas
     
      let nuevaListaPeliculas = new Array();

      /*Utilizando un for, se recorren las peliculas del array listaPeliculas 
      y se agregan al array nuevaListaPeliculas, hasta completar ocho*/

      for(let i=0;i<8;i++){
         nuevaListaPeliculas[i] = listaPeliculas[i]
      }

      //Se actualiza la variable de estado peliculas

      setPeliculas(nuevaListaPeliculas);    

   },[])

   return (
      <>
   
   {/*Se importa el componente buscador*/}
   
   <Buscador/>

<Container fluid>
   {/*Se utiliza la funcion map para recorrer todas las peliculas, y generar por cada una de ellas, un componente Pelicula*/}
<Row>
{peliculas.map(pelicula=><Pelicula key={pelicula.id} pelicula={pelicula}/>)}
</Row>
</Container>   
      </>
     
           

   )

}

