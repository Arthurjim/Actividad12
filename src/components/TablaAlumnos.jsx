import React, {useEffect, useState} from 'react';

const TablaAlumnos =()=>{
  const [alumno, setAlumno] =useState([])

  const getAlumnos = async(alumno)=>{
    try {
      const response = await fetch('http://localhost:4000/users',{
        method:"GET",
   
        headers:{
          'Content-Type':  'application/json',
        }  
      })
      const data = await response.json()
      setAlumno(data);
      console.log(alumno)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(()=>{
    
    getAlumnos(alumno);
},[])

const OneDelete = async (id) =>{
  try {
    await fetch(`http://localhost:4000/users/delete/${id}`,{
      method: 'delete',
      
      headers:{
       'Content-Type':  'application/json',
     }
    })
    .then(response => console.log(response))
    getTodos();
    window.location('/Registros')
  } catch (error) {
    console.log('Usuario no eliminado')
  }
}
  return(
    <div className="tablaAlumnos">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>CORREO</th>
          <th>DELETE</th>
        </tr>
      </thead>
      <tbody>
        {
          alumno.map(alumno=>(
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.name}</td>
              <td>{alumno.lastname}</td>
              <td>{alumno.email}</td>
              
               <td > 
                 <button 
                  className="btnDelete" 
                  type="button" 
                  onClick={() => OneDelete(alumno.id)}
                  >
                   Eliminar
                  </button>
                 </td>

            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  ) 
}
export default TablaAlumnos