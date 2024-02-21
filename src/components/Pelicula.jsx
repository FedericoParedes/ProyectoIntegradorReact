import {Col, Card, Button} from "react-bootstrap";
import '../css/pelicula.css'
import { useNavigate} from "react-router-dom";

//Componente funcional Pelicula

//Este componente recibe como propiedad un objeto pelicula

export default function Pelicula({pelicula}){

  //Se extraen todas los valores de la pelicula

  const {id, titulo, imagen, sinopsis, año, genero, duracion, pais} = pelicula;

  
//Se crea una funcion navigate para navegar hacia otro componente

  const navigate = useNavigate()

  return (
    <Col xs={3} className="column">
      {/*Este componente Card es de tipo submit y tiene un evento onClick, que dispara una funcion navigate hacia
      el componente TarjetaDetalle, enviandole como argumento el id extraido de la pelicula recibida*/}
             <Card fluid className="tarjeta mt-2 bg-black rounded justify-content-center" type='submit' onClick={()=>navigate(`/tarjeta-detalle/${id}`)}>
               {/*Este componente muestra la imagen extraida de la pelicula recibida*/}
              <Card.Img src={imagen} className="imagen"/>
              {/*Este componente muestra el titulo extraido de la pelicula recibida*/}
                <Card.Title className="card-title"><span id="titulo">{titulo}</span></Card.Title>
            </Card>
             {/*Este componente Button cumple con la misma funcionalidad del componente Card*/}
            <Button type="submit" className="boton" onClick={()=>navigate(`/tarjeta-detalle/${id}`)}><span>Ver mas</span></Button>
      </Col>
  
  )


}




