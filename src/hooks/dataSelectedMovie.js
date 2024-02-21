import { useState } from "react"

/*Esta funcion recibe como parametro un initialState, que es un objeto vacio. 
Primero define un hook interno, compuesto por una variable de estado llamada
pelicula, que por defecto será igual que el initialState, y una variable 
qu actualiza la variable de estado. Luego, se crea una funcion flecha llamada
setDataPelicula que recibe como parametro ciertos valores y actualiza la variable
de estado pelicula, enviandole los valores recibidos por parametro. Finalmente,
retorna la variable de estado pelicula y la funcion setDataPelicula, para que
sean utilizadas donde sea necesario.*/

export const dataSelectedMovie = (initialState={})=>{

  const [pelicula, setPelicula] = useState(initialState)

  const setDataPelicula = (newValues)=>{
     setPelicula(newValues);
  }

   return{
      pelicula,
      setDataPelicula,
   }


}