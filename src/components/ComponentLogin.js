import React,{ useState} from 'react';
import axios  from 'axios';
import { Email, EventAvailable } from '@mui/icons-material';
import { event, post } from 'jquery';
import './Home.css';
import logo from '../img/logo.png';



const ComponentLogin = () => {
  const url='http://localhost:3300/login';
  const [correo_usuario,setCorreoUsuario]= useState('');
  const [contraseña_usuario,setContraseñaUsuario]= useState('');
  const [error,setError]= useState(false);
  const [operation,setOperation]= useState(1);
  const [loginStatus, setLoginStatus] = useState('');
  const [title,setTitle]= useState('');
/*   const [values, setValues]= useState({
    correo_usuario: (''),
    contraseña_usuario: ('')
  }); */
  
  

  const openModal = (op, correo_usuario, contraseña_usuario) =>{
   
    setCorreoUsuario(correo_usuario);
    setContraseñaUsuario(contraseña_usuario);
    setOperation(op);
    if(op === 1){
      setTitle('Iniciar Sesion');
  } 
  
/*   else if(op === 2){
    setTitle('Cerrar seccion')
    setCorreoUsuario('');
    setContraseñaUsuario('');
    
    ; } */
 }


 
const handleSumit = async () => {
 /*  const respuesta = axios.get('http://localhost:3300/productos'); console.log(respuesta ); 
 await axios  ({ method:metodo, url: 'http://localhost:3300/login', data:parametros})*/
  console.log('entre');
  
  if (correo_usuario === '' || contraseña_usuario === '') {
    setError(true)
    return    
  }
  setError(false)

 /*  const enviarSolicitud = async(metodo,parametros) => {
    await axios({ method:metodo, url: url, data:parametros}).then(function(respuesta){
        var tipo = respuesta.data[0];
        var msj = respuesta.data[1];
        //show_alerta(msj,tipo);
        if(tipo === 'success'){
            toast(msj);
            document.getElementById('btnCerrar').click();
            ge */




            

  await axios({ method:post, url: 'http://localhost:3300/login',
  correo_usuario:  correo_usuario,
  contraseña_usuario: contraseña_usuario,}).then((response) => {
  console.log(response); 
  if (response.data.message){
    setLoginStatus(response.data.message);
    console.log(loginStatus);
} else {
  setLoginStatus(response.data[0].correo_usuario);
}
})
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
         
       <li ><a href="./productos" className="Cabecera-a">Producto</a></li> 
       
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

            <h3 class="mb-5">Sign in</h3>

            <div  class="form-outline mb-4" >
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" value={correo_usuario} onChange={(e)=> setCorreoUsuario(e.target.value)}></input>
              <label class="form-label" for="typeEmailX-2">Email</label>
               
            </div>

            <div class="form-outline mb-4">
              <input type="password"  id="typePasswordX-2" class="form-control form-control-lg" value={contraseña_usuario} onChange={(e)=> setContraseñaUsuario(e.target.value)}></input>
              <label class="form-label" for="typePasswordX-2">Password</label>
             
            </div>

            {/* <!-- Checkbox --> */}
            <div class="form-check d-flex justify-content-start mb-4">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label class="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button class="btn btn-primary btn-lg btn-block" onClick = {handleSumit} >Login</button>



            <hr class="my-4"></hr>
            
             <button class="btn btn-lg btn-block btn-primary"
              type="submit"><i class="fab fa-google me-2"></i><a href='./user'></a> Create acount</button>
            {/* <button class="btn btn-lg btn-block btn-primary mb-2"
              type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}

          </div>
        </div>
      </div>
    </div>

  </div>
  {/* {error && <h3>Todos los campos son Obligatorios</h3>} */}
</section> 

</div>
  )
}

export default ComponentLogin;