import { Button, Container, Row } from "react-bootstrap"
import { useNavigate} from "react-router-dom"
import { getListPeliculas} from "../services/localstorage"
import '../css/catalogo.css'
import { useEffect, useState } from "react"
import Pelicula from "../components/Pelicula.jsx"
import Buscador from "./Buscador.jsx"


//Componente Catalogos

export default function Catalogo(){
          
  //Se crea una funcion navigate para navegar hacia otro componente

       const navigate = useNavigate()

   //Se crea un hook para establecer y modificar el estado de un array de peliculas    

       const [peliculas, setPeliculas] = useState([])


/*Se implementa la funcion useEffect para actualizar la variable de estado de peliculas,
enviandole las peliculas almacenadas en el local storage cada vez que se carga el componente.
*/

   useEffect(()=>{

     setPeliculas(getListPeliculas());


   },[]);

       return (
         <>
 
  {/*Se importa el componente buscador*/}
         
         <Buscador/>

                 <Container fluid>  

        {/*Este boton tiene un evento onClick, que dispara una funcion navigate hacia el componente Home*/}

        <Button className="boton-volver" type="submit" onClick={()=>navigate('/')}><span id="span-volver">Volver</span></Button>

{/*Se utiliza la funcion map para recorrer todas las peliculas, y generar por cada una de ellas, un componente Pelicula*/}

          <Row>
              {peliculas.map(pelicula=><Pelicula imagen={pelicula.imagen} key={pelicula.id} pelicula={pelicula}/>)}
          </Row>
        </Container>   

         </>
        
                
       )  

       
}
















