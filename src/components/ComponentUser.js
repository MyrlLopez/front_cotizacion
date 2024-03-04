import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import logo from '../img/logo.png';
import { NoMeals } from '@mui/icons-material';
 
const ComponentUser = () => {
  const url='http://localhost:3300/user';
  const [usuario,setUsuario]= useState([]);
  const [nombre_usuario,setNombreUsuario]= useState('');
  const [estado,setEstado]= useState('');
  const [direccion,setDireccion]= useState('');
  const [telefono,setTelefono]= useState('');
  const [correo_usuario,setCorreousuario]= useState('');
  const [contrasena_usuario,setContrasenaUsuario]= useState('');
  const [operation,setOperation]= useState(1);
  const [title,setTitle]= useState(''); 
  
 useEffect( ()=>{
    getUsuarios();
},[]);
const getUsuarios = async () => {
    const respuesta = await axios.get(url);
    setUsuario(respuesta.data);
    console.log(respuesta.data);
}

  return ( 
  <div className='App'> 
<div className="menu-principal">
<div class="logo" id="logo">
            <img src= {logo} alt="Logo"></img>
</div>
<div class="menu-barra" id="menuBarra">
            <i class="fas fa-angle-right" id="btnMenuClose"></i>
            <nav class="enlaces" id="enlaces">
            <ul>
       <li ><a href="./" className="Cabecera-a">Home</a></li> 
       <li ><a href="./login" className="Cabecera-a">cotizaciones</a></li>  
        
        
       </ul>
            </nav>
            </div>  
            </div>
<section class="vh-100" style= {{backgroundColor: "#f7b1b7" }} >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong">
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Created Usuario</h3>

            <div  class="form-outline mb-4" >
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" value={nombre_usuario} onChange={(e)=> setNombreUsuario(e.target.value)}></input>
              <label class="form-label" for="typeEmailX-2">Nombre Usuario</label>
               
            </div>

            <div class="form-outline mb-4">
              <input type="email"  id="typeEmailX-2" class="form-control form-control-lg"  value={direccion} onChange={(e)=> setDireccion(e.target.value)} ></input>
              <label class="form-label" for="typeEmailX-2">Direccion</label>
             
            </div>
            <div class="form-outline mb-4">
              <input type="email"  id="typeEmailX-2" class="form-control form-control-lg"  value={telefono} onChange={(e)=> setTelefono(e.target.value)} ></input>
              <label class="form-label" for="typeEmailX-2">Telefono</label>
             
            </div>

            <div  class="form-outline mb-4"  >
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg"  value={correo_usuario} onChange={(e)=> setCorreousuario(e.target.value)} ></input>
              <label class="form-label" for="typeEmailX-2">Email</label>
               
            </div>

            <div class="form-outline mb-4">
              <input type="password"  id="typePasswordX-2" class="form-control form-control-lg" value={contrasena_usuario} onChange={(e)=> setContrasenaUsuario(e.target.value)} ></input>
              <label class="form-label" for="typePasswordX-2">Password</label>
             
            </div>
            <button class="btn btn-primary btn-lg btn-block" type="submit"/*  onClick={()=> openModal(1)} */>Create acount</button>

          </div>
        </div>
      </div>
    </div>

  </div>
  {/* {error && <h3>Todos los campos son Obligatorios</h3>} */}
</section>

   {/*  {!user.length  > 0 };
    <Login setUser = {setUser}/>
    : <user user = {user} setUser = {setUser}/>
    <button onClick= {handleloyout}>Cerrar sesion</button>  */}
    


  </div>
  )
}

export default ComponentUser;