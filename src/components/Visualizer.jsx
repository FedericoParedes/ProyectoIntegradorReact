import { Row } from "react-bootstrap";
import Pelicula from "./Pelicula";

//Componente Visualizer

export default function Visualizer({peliculasBuscadas}){ 


  return(   
             <>
             {/*Este componente recorre las peliculas que fueron filtradas en el componente Buscador,
             y las devuelve utilizando la funcion map*/}
              <Row className="w-100">
              {peliculasBuscadas.map(pelicula=><Pelicula key={pelicula.id} pelicula={pelicula}/>)}
            </Row>  
              </>
       

  )










      
        




}


/*function outro(){
   return(
         /*hideComponent ?
  <Buscador/>   

          <Button className="back-button" type="submit" onClick={()=>navigate('/catalogo-peliculas')}><span id="span-back-button">Volver</span></Button>
           
           <Row>
         
           {peliculas.map(pelicula=><Pelicula key={pelicula.id} pelicula={pelicula}/>)}

           </Row>

            </>

       <Button className="back-button" type="submit" onClick={()=>navigate('/catalogo-peliculas')}><span id="span-back-button">Volver</span></Button>


          <>
    
      <Row>
      
       {peliculas.map(pelicula=> <Pelicula key={pelicula.id} pelicula={pelicula}/>)}

      </Row>
          </>
          

           :
            <>
            
             <Buscador/>   

          <Button className="back-button" type="submit" onClick={()=>navigate('/catalogo-peliculas')}><span id="span-back-button">Volver</span></Button>
           
           <Row>
         
           {peliculas.map(pelicula=><Pelicula key={pelicula.id} pelicula={pelicula}/>)}

           </Row>

            </>
   )
}*/