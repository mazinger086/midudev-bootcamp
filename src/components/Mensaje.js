const Mensaje = (props) =>{
    console.log(props);
    return <h1 style={{color:props.color}}>{props.txt}</h1>
   
}

export default Mensaje;