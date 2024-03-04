import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import './Home.css';
import logo from '../img/logo.png';


const ComponentProductos= () => {

  const url='http://localhost:3300/productos';
    const [productos,setProductos]= useState([]);
    const [id_productos,setIdProductos]= useState('');
    const [detalle_producto,setDetalleProducto]= useState('');
    const [precio,setPrecio]= useState('');
    const [estado,setEstado]= useState('');    
    const [operation,setOperation]= useState(1);
    const [title,setTitle]= useState('');

    useEffect( ()=>{
      getProductos();
  },[]);
  const getProductos = async () => {
      const respuesta = await axios.get(url);
      setProductos(respuesta.data);
      console.log(respuesta.data);
  }

  
  const openModal = (op, id_productos, detalle_producto, precio, estado) =>{
   
    setIdProductos('');
    setDetalleProducto('');
    setPrecio('');
    setEstado('');    
    setOperation(op);
    if(op === 1){
      setTitle('Crear Producto');
  } else if(op === 2){
    setTitle('Editar Producto')
    setIdProductos(id_productos);
    setDetalleProducto(detalle_producto);
    setPrecio(precio);  
    setEstado(estado); 
      
    ; }
 }

 const deleteProductos= (id) =>{ 
  if (window.confirm("¿Desea borrar este Producto?")) {
      setIdProductos(id);
          console.log(id);
          enviarSolicitud('DELETE',{id:id});
    }}

    const validar = () => {
      var parametros;
      var metodo;
      if(operation === 1){
        parametros= {id_productos:id_productos, detalle_producto: detalle_producto.trim(), precio: precio.trim(), estado:estado};
        metodo= 'POST';
    } 
    else if(operation === 2){
        parametros= { id_productos:id_productos, detalle_producto:detalle_producto.trim(), precio: precio.trim(), estado:estado};
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
              getProductos();
          }
      })
      .catch(function(error){
          //show_alerta('Error en la solicitud','error');
          console.log(error);
      });
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
  <Button startIcon={<AddCircleIcon />} variant="contained" onClick={()=> openModal(1)} data-bs-toggle='modal' data-bs-target='#modalProductos'>Crear Productos</Button>
  <br></br>
  <br></br>
  <div class="modal" tabindex="-1" id='modalProductos'>
  <div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">{title}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <div className='input-group mb-3'>
                          <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                          <input type='text' id='id_productos' className='form-control' placeholder='id' value={id_productos}
                          onChange={(e)=> setIdProductos(e.target.value)}></input>
                      </div>
                      <div className='input-group mb-3'>
                          <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                          <input type='text' id='detalle_producto' className='form-control' placeholder='Producto' value={detalle_producto}
                          onChange={(e)=> setDetalleProducto(e.target.value)}></input>
                      </div>
                                         
                      <div className='input-group mb-3'>
                          <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                          <input type='text' id='precio' className='form-control' placeholder='Precio' value={precio}
                          onChange={(e)=> setPrecio(e.target.value)}></input>
                      </div>
                      <div className='input-group mb-3'>
                          <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                          <input type='text' id='estado' className='form-control' placeholder='Estado' value={estado}
                          onChange={(e)=> setEstado(e.target.value)}></input>
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
          <th scope="col">Productos</th>
          <th scope="col">Detalle_producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Estado</th>
          <th scope="col">Opciones</th>
      </tr>
  </thead>
  <tbody>
          {productos.map( (producto, i)=>(
                  <tr scope="row" key={producto.id_productos}>
                                        <td>{producto.id_productos}</td>
                                       <td>{producto.detalle_producto}</td>       
                                        <td>{producto.precio}</td> 
                                         <td>{producto.estado}</td>                                    
                                  <td><Button color="warning" variant="contained" onClick={()=>openModal(2, producto.id_productos, producto.detalle_producto,  producto.precio, producto.estado)} data-bs-toggle='modal' data-bs-target='#modalProductos'><UpdateIcon fontSize="small" /></Button>
                                   &nbsp;<Button color="error" variant="contained" onClick={()=>deleteProductos(producto.id_productos)}><DeleteIcon fontSize="small" /></Button></td>        
                  </tr>
                          ))
                          }
  
</tbody>
  
</table></div>
  )


}

export default ComponentProductos;