import { Menu } from '@mui/material';
import './Home.css';
import logo from '../img/logo.png';
import salon from '../img/salon.jpg';



import { useState } from 'react';
const ComponentHome = () => {

const [ menu , setMenu] = useState( false )

const toggleMenu = () =>{
    setMenu(!menu)
}
return (
 

<div className="menu-principal">
<div class="logo" id="logo">
            <img src= {logo} alt="Logo"></img>
</div>
<div class="menu-barra" id="menuBarra">
            <i class="fas fa-angle-right" id="btnMenuClose"></i>
            <nav class="enlaces" id="enlaces">
            <ul>
       <li ><a href="./" className="Cabecera-a">Home</a></li> 
       <li ><a href="./login" className="Cabecera-a">Login</a></li>  
       <li ><a href="./productos" className="Cabecera-a">Producto</a></li> 
       <li ><a href="./cotizaciones" className="Cabecera-a">cotizaciones</a></li> 
       <li ><a href="./user" className="Cabecera-a">Registro</a></li> 
       </ul>
            </nav>
            </div>   
              
            <div class="container-productos">  
            <div class="imagen-productos">
           <img src={salon} alt="compu"></img>
                </div></div>
</div>







)
    
}

export default ComponentHome