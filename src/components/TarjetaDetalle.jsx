import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { getPeliculaById } from "../services/localstorage"
import { useEffect} from "react";
import { dataSelectedMovie } from "../hooks/dataSelectedMovie";
import '../css/TarjetaDetalle.css'
import Buscador from "./Buscador";

//Componente TarjetaDetalle

export default function TarjetaDetalle(){

//Utilizo la funcion useParams() para obtener el id del path

    const {id} = useParams()

/*Extraigo la variable de estado pelicula y la funcion setDataPelicula de la 
funcion dataSelectedMovie y establezco sus propiedades con valores vacíos.*/
   const {pelicula, setDataPelicula} = dataSelectedMovie({
       titulo:'',
       imagen: '',
       sinopsis:'',
       año:'',
       genero:'',
       duracion:'',
       pais:''
   })

  //Se crea una funcion navigate para navegar hacia otro componente

   const navigate = useNavigate()


  /*Implemento useEffect para actualizar la variable de estado extraida de
  la funcion dataSelectedMovie cada vez que se carga el componente.*/
  
    useEffect(()=>{

   /*Utilizo la funcion getPeliculaById enviandole el id de recibido como parametro,
   y almaceno la pelicula obtenida en la variable movie, que ahora es un objeto.*/
    
        const movie = getPeliculaById(id);
         
   //Actualizo la variable de estado pelicula, enviandole la pelicula obtenida.

        setDataPelicula(movie);
 
        },[id])


      return(
           
        <>
               {/*Importo el componente Buscador*/} 
            
               <Buscador/>
            
              <Container fluid className="main-container">
             
               {/*Este componente Button es de tipo submit y tiene un evento onClick,
                que dispara un a funcion navigate hacia el componente Catalogo*/}
            
             <Button className="back-button" type="submit" onClick={()=>navigate('/catalogo-peliculas')}><span id="span-back-button">Volver</span></Button>
            
             <br />
            
             <br />
           
            <Row>
             
              <Col xs={6} className="first-column bg-black">
              
               <Card className="main-card">
               
                {/*Este componente Card.Img muestra la propiedad imagen de la pelicula obtenida*/}
               
                <Card.Img src={pelicula.imagen} className="image-card"></Card.Img>
              
               </Card>
              
              </Col>
              
              <Col xs={6} className="second-column">
                
                <Card className="desc-card bg-black">
               
               {/*Este componente Card.Title muestra la propiedad titulo de la pelicula obtenida*/}
                 
                  <Card.Title className="title"><span id="span-title"> {pelicula.titulo}</span></Card.Title>
                 
                  <Card.Body>
                 
                   {/*Este componente Card.Text muestra la propiedad sinopsis de la pelicula obtenida*/}
                   
                    <Card.Text className="description-text"><span id="txt-sinopsis">{pelicula.sinopsis}</span></Card.Text>
                 
                  {/*Este componente Card.Text muestra la propiedad año de la pelicula obtenida*/}
                   
                    <Card.Text><span id="txtAño">Año: {pelicula.año}</span></Card.Text>
                 
                  {/*Este componente Card.Text muestra la propiedad genero de la pelicula obtenida*/}
               
                <Card.Text><span id="txtGenero">Genero: {pelicula.genero}</span></Card.Text>
             
              {/*Este componente Card.Text muestra la propiedad duracion de la pelicula obtenida*/}
              
                <Card.Text><span id="txtDuracion">Duracion: {pelicula.duracion}</span></Card.Text>
             
             {/*Este componente Card.Text muestra la propiedad pais de la pelicula obtenida*/}
               
                 <Card.Text><span id="txtPais">Pais: {pelicula.pais}</span></Card.Text>
              
               </Card.Body>
             
              </Card>
             
              </Col>
          
           </Row>
         
         </Container>

        </>
        
      )




}

