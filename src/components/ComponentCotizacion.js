import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UpdateIcon from '@mui/icons-material/Update';
import dayjs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import './Home.css';
import logo from '../img/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ComponentCotizacion = () => {

    const url='http://localhost:3300/cotizacion';
    const [cotizacion,setCotizacion]= useState([]);
    const [id_cotizacion,setIdCotizacion]= useState('');
    const [id_usuario,setIdUsuario]= useState('');
    const [fecha_cotizacion,setFechaCotizacion]= useState('');
    const [estado,setEstado]= useState('');
    const [subtotal,setSubTotal]= useState('');
    const [descuento,setDescuento]= useState('');
    const [tipo_descuento,setTipoDescuento]= useState('');
    const [valor_total,setValorTotal]= useState('');
    const [operation,setOperation]= useState(1);
    const [title,setTitle]= useState('');

    

    useEffect( ()=>{
        getCotizacion();
    },[]);
    const getCotizacion = async () => {
        const respuesta = await axios.get(url);
        setCotizacion(respuesta.data);
        console.log(respuesta.data);
    }

    const openModal = (op, id_cotizacion, id_usuario, fecha_cotizacion, estado, subtotal, descuento, tipo_descuento, valor_total) =>{
   
        setIdCotizacion('');
        setIdUsuario('');
        setFechaCotizacion('');
        setEstado(''); 
        setSubTotal('');
        setDescuento('');
        setTipoDescuento('');
        setValorTotal('');
        setOperation(op);
        if(op === 1){
          setTitle('Crear Cotizacion');
      } else if(op === 2){
        setTitle('Editar Cotizacion')
        setIdCotizacion(id_cotizacion);
        setIdUsuario(id_usuario);
        setFechaCotizacion(fecha_cotizacion);
        setEstado(estado); 
        setSubTotal(subtotal);
        setDescuento(descuento);
        setTipoDescuento(tipo_descuento);
        setValorTotal(valor_total)
        
        ; }
     }

     const deleteCotizacion= (id) =>{
 
        if (window.confirm("¿Desea borrar esta cotizacion?")) {
            setIdCotizacion(id);
                console.log(id);
                enviarSolicitud('DELETE',{id:id});
          }}

          const validar = () => {
            var parametros;
            var metodo;
            if(operation === 1){
              parametros= {id_cotizacion:id_cotizacion, id_usuario:id_usuario, fecha_cotizacion:fecha_cotizacion.trim(), estado: estado.trim(), subtotal:subtotal.trim(), descuento: descuento.trim(), tipo_descuento: tipo_descuento.trim(), valor_total: valor_total.trim()};
              metodo= 'POST';
          } 
          else if(operation === 2){
              parametros= {id_usuario:id_usuario, fecha_cotizacion: fecha_cotizacion.trim(), estado:estado, subtotal: subtotal.trim(), descuento: descuento.trim(), tipo_descuento: tipo_descuento.trim(), valor_total: valor_total.trim()};
              metodo= 'PUT';
          }
          enviarSolicitud(metodo,parametros);}
      
          const enviarSolicitud = async(metodo,parametros) => {
            await axios({ method:metodo, url: url, data:parametros}).then(function(respuesta){
                var tipo = respuesta.data[0];
                var msj = respuesta.data[1];
                //show_alerta(msj,tipo);
                if(tipo === 'success'){
                    document.getElementById('btnCerrar').click();
                    getCotizacion();
                }
            })
            .catch(function(error){
                //show_alerta('Error en la solicitud','error');
                console.log(error)
            });
        }


    return (

        <div className='App'> 

        <ToastContainer />
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
       <li ><a href="./user" className="Cabecera-a">Registro</a></li> 
       </ul>
            </nav>
            </div>  
            </div>
        <Button startIcon={<AddCircleIcon />} variant="contained" onClick={()=> openModal(1)} data-bs-toggle='modal' data-bs-target='#modalCotizaciones'>Crear Cotizacion</Button>
        <br></br>
        <br></br>
    
        <div class="modal" tabindex="-1" id='modalCotizaciones'>
        <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='id_cotizacion' className='form-control' placeholder='Id_cotizacion' value={id_cotizacion}
                                onChange={(e)=> setIdCotizacion(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='id_usuario' className='form-control' placeholder='Id_Usuario' value={id_usuario}
                                onChange={(e)=> setIdUsuario(e.target.value)}></input>
                            </div>         
          <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='fecha_cotizacion' className='form-control' placeholder='Fecha de Cotizacion' value={fecha_cotizacion}
                                onChange={(e)=> setFechaCotizacion(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='estado' className='form-control' placeholder='Estado' value={estado}
                                onChange={(e)=> setEstado(e.target.value)}></input>
                            </div>
    
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='subtotal' className='form-control' placeholder='Subtotal' value={subtotal}
                                onChange={(e)=> setSubTotal(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='descuento' className='form-control' placeholder='Descuento' value={descuento}
                                onChange={(e)=> setDescuento(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='tipo_descuento' className='form-control' placeholder='Tipo de Descuento' value={tipo_descuento}
                                onChange={(e)=> setTipoDescuento(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                                <input type='text' id='valor_total' className='form-control' placeholder='Valor Total' value={valor_total}
                                onChange={(e)=> setValorTotal(e.target.value)}></input>
                            </div>
    
    
          </div> 
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="btnCerrar" >Close</button>
            <button onClick={() => validar()} className='btn btn-success'>
                       <i className='fa-solid fa-floppy-disk'></i> Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
    
        <table class="table">
        <thead class="thead-light">
            <tr>
                <th scope="col">id_cotizacion</th>
                <th scope="col">id_usuario</th>
                <th scope="col">fecha_cotizacion</th>
                <th scope="col">Estado</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Descuento</th>
                <th scope="col">Tipo de Descuento</th>
                <th scope="col">Valor Total</th>
                <th scope="col">Opciones</th>                
            </tr>
        </thead>
        <tbody>
           {cotizacion.map( (cotizacion, i)=>(
                                    <tr scope="row" key={cotizacion.id_cotizacion}>
                                        <td>{cotizacion.id_cotizacion}</td>
                                        <td>{cotizacion.id_usuario}</td>         
                                        <td>{cotizacion.fecha_cotizacion}</td>  
                                        <td>{cotizacion.estado}</td>    
                                        <td>{cotizacion.subtotal}</td>   
                                        <td>{cotizacion.descuento}</td> 
                                        <td>{cotizacion.tipo_descuento}</td> 
                                        <td>{cotizacion.valor_total}</td>  
                                        <td><Button color="warning" variant="contained" onClick={()=>openModal(2, cotizacion.id_usuario, dayjs(cotizacion.fecha_cotizacion).format("YYYY-MM-DD"), cotizacion.estado, cotizacion.subtotal, cotizacion.descuento, cotizacion.tipo_descuento, cotizacion.valor_total)} data-bs-toggle='modal' data-bs-target='#modalCotizacion'><UpdateIcon fontSize="small" /></Button>
                                         &nbsp;<Button color="error" variant="contained" onClick={()=>deleteCotizacion(cotizacion.id_cotizacion)}><DeleteIcon fontSize="small" /></Button> </td>        
                                    </tr>
                                ))

                                }
        
    </tbody>
        
    </table></div>

)
           
}




export default ComponentCotizacion;