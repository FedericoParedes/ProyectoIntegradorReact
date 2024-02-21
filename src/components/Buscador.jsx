import { Button, Col, Container, Form, Row } from "react-bootstrap";
import '../css/buscador.css'
import { useNavigate } from "react-router-dom";
import { getListPeliculas } from "../services/localstorage";
import { useState } from "react";
import Visualizer from "./Visualizer";

//Componente Buscador

export default function Buscador() {
 
  //Se crea una funcion navigate para navegar hacia otro componente
   
  const navigate = useNavigate()

  //Se crea un hook para establecer y modificar el estado de un array de peliculas

   const [peliculas, setPeliculas] = useState([])

  //Se crea un hook para establecer y modificar el estado del titulo ingresado

   const [titulo, setTitulo] = useState('');
 
   //Se crea un hook para establecer y modificar el estado del componente oculto

  const [hideComponent, setHideComponent] = useState(false)

    //Se crea un hook para establecer y modificar el estado del boton de busqueda

  const [searchButton, setSearchButton] = useState(false)

/*Manejador de evento onChange. Si se registran cambios en el campo form-control, esta funcion
capturará los cambios y actualizará la variable de estado titulo. Tambien actualizará la variable
de estado del boton de busqueda a true*/

   const handleInputValue = (e)=>{
      
      let nuevoTitulo = e.target.value;
      
      setTitulo(nuevoTitulo);

      setSearchButton(true);

 }

//Validaciones para filtrar las peliculas que coincidan con la busqueda realizada

 const handleInputSearch =()=>{
   
  //En este primer array se almacenan las peliculas del local storage
   
   let peliculasBuscadas = getListPeliculas();
   
   //En este segundo array se almacenaran las peliculas peliculas que coincidan con la busqueda realizada
   
   let peliculasFiltradas = new Array()

  //Se ejecuta la funcion map para recorrer el primer array, que contiene todas las peliculas

   peliculasBuscadas.map((pelicula)=>{
   
    [titulo.trim().split(" ").join("").length] >0 & [titulo.trim().split(" ").join("").length] <2 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) || [titulo.trim().split(" ").join("").length] >1 & [titulo.trim().split(" ").join("").length] <3 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) ||
    
    [titulo.trim().split(" ").join("").length] >2 & [titulo.trim().split(" ").join("").length] <4 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) || [titulo.trim().split(" ").join("").length] >3 & [titulo.trim().split(" ").join("").length] <5 & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) || [titulo.trim().split(" ").join("").length] >4 & 
    
    [titulo.trim().split(" ").join("").length] <6 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) || [titulo.trim().split(" ").join("").length] >5 & [titulo.trim().split(" ").join("").length] <7 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase())
    
    & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) || [titulo.trim().split(" ").join("").length] >6 & [titulo.trim().split(" ").join("").length] <8 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase())
    
    & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase())
    
    & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) || [titulo.trim().split(" ").join("").length]>7 &  [titulo.trim().split(" ").join("").length] <9 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) ||
    
    [titulo.trim().split(" ").join("").length]>8 &  [titulo.trim().split(" ").join("").length] <10 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) || 

    [titulo.trim().split(" ").join("").length]>9 &  [titulo.trim().split(" ").join("").length] <11 & [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) || [titulo.trim().split(" ").join("").length]>10 &  [titulo.trim().split(" ").join("").length] <12 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) || [titulo.trim().split(" ").join("").length]>11 &  [titulo.trim().split(" ").join("").length] <13 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase())
    
    & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) || [titulo.trim().split(" ").join("").length]>12 &  [titulo.trim().split(" ").join("").length] <14 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>13 &  [titulo.trim().split(" ").join("").length] <15 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>14 &  [titulo.trim().split(" ").join("").length] <16 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) || [titulo.trim().split(" ").join("").length]>15 &  [titulo.trim().split(" ").join("").length] <17 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase())
    
    & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) || [titulo.trim().split(" ").join("").length]>16 &  [titulo.trim().split(" ").join("").length] <18 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & 
    
    [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>17 &  [titulo.trim().split(" ").join("").length] <19 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>18 &  [titulo.trim().split(" ").join("").length] <20 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>19 &  [titulo.trim().split(" ").join("").length] <21 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) || 

    [titulo.trim().split(" ").join("").length]>20 &  [titulo.trim().split(" ").join("").length] <22 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>21 &  [titulo.trim().split(" ").join("").length] <23 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>22 &  [titulo.trim().split(" ").join("").length] <24 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>23 &  [titulo.trim().split(" ").join("").length] <25 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>24 &  [titulo.trim().split(" ").join("").length] <26 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(24).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(24).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>25 &  [titulo.trim().split(" ").join("").length] <27 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(24).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(24).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(25).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(25).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>26 &  [titulo.trim().split(" ").join("").length] <28 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(24).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(24).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(25).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(25).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(26).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(26).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>27 &  [titulo.trim().split(" ").join("").length] <29 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(24).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(24).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(25).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(25).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(26).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(26).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(27).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(27).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length]>28 &  [titulo.trim().split(" ").join("").length] <30 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(24).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(24).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(25).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(25).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(26).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(26).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(27).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(27).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(28).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(28).toUpperCase()) ||
    
    [titulo.trim().split(" ").join("").length]>28 &  [titulo.trim().split(" ").join("").length] <30 &  [pelicula.titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(2).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(3).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(4).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(5).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(6).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(6).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(7).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(7).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(8).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(8).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(9).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(9).toUpperCase()) & 

    [pelicula.titulo.trim().split(" ").join("").charAt(10).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(10).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(11).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(11).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(12).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(12).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(13).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(13).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(14).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(14).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(15).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(15).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(16).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(16).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(17).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(17).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(18).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(18).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(19).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(19).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(20).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(20).toUpperCase()) &

    [pelicula.titulo.trim().split(" ").join("").charAt(21).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(21).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(22).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(22).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(23).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(23).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(24).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(24).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(25).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(25).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(26).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(26).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(27).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(27).toUpperCase()) &
    
    [pelicula.titulo.trim().split(" ").join("").charAt(28).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(28).toUpperCase()) & [pelicula.titulo.trim().split(" ").join("").charAt(29).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(29).toUpperCase()) || 
    
    [titulo.trim().split(" ").join("").charAt(0)].includes("¿") & [pelicula.titulo.trim().split(" ").join("").charAt(0)].includes("¿") & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(1).toUpperCase()) ||

    [pelicula.titulo.trim().split(" ").join("").charAt(0)].includes("¿") & [pelicula.titulo.trim().split(" ").join("").charAt(0)].includes("¿") & [pelicula.titulo.trim().split(" ").join("").charAt(1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(0).toUpperCase()) ||

    [titulo.trim().split(" ").join("").length] > 4 & [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-1).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-1).toUpperCase()) &

   [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-2).toUpperCase()) &

   [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-3).toUpperCase()) &

   [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-4).toUpperCase()) ||

   [titulo.trim().split(" ").join("").length] > 3 & [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-2).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-1).toUpperCase()) &

   [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-3).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-2).toUpperCase()) &

   [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-4).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-3).toUpperCase()) &

   [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-5).toUpperCase()].includes(titulo.trim().split(" ").join("").charAt(titulo.trim().split(" ").join("").length-4).toUpperCase()) ||
   
   [titulo.trim().split(" ").join("").length]>0 & [titulo.trim().split(" ").join("").length] < 2 & [pelicula.titulo.trim().split(" ").join("").charAt(pelicula.titulo.trim().split(" ").join("").length-1).toUpperCase()].includes("?") & [titulo.trim().split(" ").join("").charAt(0).toUpperCase()].includes("?")
  
     /*Si al finalizar las validaciones, la pelicula coincide con el titulo ingresado,
      se almacenará la pelicula en el array creado para este fin.
     */

    ?  peliculasFiltradas.push(pelicula) : false
  
  })
     
   /*Se actualiza la variable de estado de peliculas, enviandole el nuevo array
   con las peliculas filtradas y se actualiza la variable de estado del componente
   oculto a true. 
   */
   
     setPeliculas(peliculasFiltradas);
      setHideComponent(true);
     
}

/*Manejador del evento submit. Si la condicion se cumple, se ejecutan las validaciones. Si no se cumple, 
se muestra un mensaje por la ventana prompt.
*/

const handleSubmit =()=>{
 
  if(searchButton!=true){
    alert('Debe ingresar una pelicula')
  } else{
    handleInputSearch();
  }

}

return(  

      <Container fluid>
        
        {
          /*Se realiza una validacion con un operador ternario. Si el componente oculto existe
           se mostrará lo siguiente:
          */
        }
       
        {hideComponent ?               
<>

<Button className="boton-volver" onClick={()=>navigate('/')}><span id="span-home">Volver</span></Button>
         
         {/*Validacion: Si peliculas contiene mas de un elemento, entonces se ejecutará
          otra validacion para determinar si peliculas contiene un solo elemento o mas. Dependiendo del
          resultado de la evaluacion se mostrarán las peliculas coincidentes y un mensaje indicando la
          cantidad de resultados obtenidos. Si peliculas no contiene ningun elemento, entonces se mostrará
          el mensaje correspondiente.
         */}
        
         {peliculas.length > 0 ? 
         
         <>
          
           {peliculas.length > 1 ? 
           
           <>
           
           <h4 className="text-white">Se encontraron {peliculas.length} resultados</h4>

           </> 
            
           :    <h4 className="text-white">Se encontró {peliculas.length} resultado</h4>
           
           }
         
         <Visualizer peliculasBuscadas={peliculas}/>

         
         </>
         
         :    <h4 className="text-white">No se encontró ningun resultado</h4>
       
       }

</>

             : 
            
            <Row className="w-100">
            
            {/*Mientras el estado del componente oculto sea false, se mostrará la barra de busqueda*/}
               
            <Col xs={10} className="d-flex">
            
             {/*Se establece el evento onSubmit*/}
          
            <Form onSubmit={handleSubmit} fluid className="container-form m-3 rounded d-flex">

           {/*En el form-control se establecen los eventos onChange y onFocus. El evento onChange
            es capturado por la funcion handleInputValue, que actualiza la variable de estado titulo.
            El evento onFocus ejecuta una funcion navigate hacia este componente.
           */}
          
          <Form.Control
           type="search"
            placeholder="Buscar pelicula"
            className="form-control rounded bg-light"
             value={titulo}
            onChange={handleInputValue}
           onFocus={()=>navigate('/buscador-peliculas')}
         >
          
           </Form.Control>
           
           {/*Boton que dispara el evento onSubmit*/}
          
           <Button className="boton-buscar" type="submit"><span id="span-search">Buscar</span></Button>

           </Form>
          
           </Col>
         
          <Col xs={2}>
          
            {/*Este boton tiene un evento onClick, que dispara una funcion navigate hacia el componente Catalogo*/}
          
          <Button className="boton-catalogo bg-black" type="submit" onClick={()=>navigate('/catalogo-peliculas')}> <span id="span-cat">Ver catalogo</span></Button>    
         
          </Col>
          
          </Row>
 
           }

      </Container>
              
        ) 
  
      }





 
  













































