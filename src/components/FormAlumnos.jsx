import React,{useState} from 'react';

const FormAlumnos =()=>{
    const [alumno, setAlumno] =useState({
      name:"",
      lastname:"",
      email:"",
      password:""
    })
  const handleChange = (e)=>{ 
    
    setAlumno({
      ...alumno,
      [e.target.name]:e.target.value
   
    })
   
  }
  const addAlumno = async (e) => {
    e.preventDefault();
    console.log(alumno)
    try {
       await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(alumno)
      })
      .then(res => console.log(res.data))
    } catch (error) {

      console.error(error);
    }
   
   
  }
  return(
    <div className="Formulario">
      <form>
        <h2>Ingreas un nuevo usuario</h2>
        <p>Ingresa tu nombre</p>
        <input type="text" name="name" onChange={handleChange} required />
        <p>Ingresa tu apellido</p>
        <input type="text" name="lastname"  onChange={handleChange}  required />
        <p>Ingresa tu email</p>
        <input type="text" name="email" id="email"  onChange={handleChange}  required />
        <p>Ingresa una contraseña</p>
        <input type="password" name="password" id="password"  onChange={handleChange}  required />
        <br/>
        <button onClick={addAlumno}>Enviar</button>
      </form>
    </div>
    
  )
}
export default FormAlumnos;