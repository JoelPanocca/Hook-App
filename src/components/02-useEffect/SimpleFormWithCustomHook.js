import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './simpleForm.css';
export const SimpleFormWithCustomHook = () => {

    const [valuesForm, handleInputChange] = useForm({
        nombre: '',
        correo: '',
        clave: ''
    });
    const {nombre, correo, clave} = valuesForm;

    useEffect(() => {
        console.log("Se cambió el correo");
    }, [correo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(valuesForm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>useEffect with custom HOOKS</h1>
            <hr />
            <div className="form-group">
                <input type="text" placeholder="Nombre" name="nombre" className="form-control" onChange={handleInputChange} value={nombre} autoComplete="off"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Correo" name="correo" className="form-control" onChange={handleInputChange} value={correo} autoComplete="off"/>
            </div>  
            <div className="form-group">
                <input type="password" placeholder="****" name="clave" className="form-control" onChange={handleInputChange} value={clave} autoComplete="off"/>
            </div> 
            <button type="submit">Guardar</button>                 
        </form>
    )
}
