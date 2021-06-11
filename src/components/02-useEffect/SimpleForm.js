import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './simpleForm.css';
export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        nombre: '',
        correo: ''
    });
    const {nombre, correo} = formState;
    useEffect(() => {
        // console.log("Primer useEffect");
    }, []);

    useEffect(() => {
        // console.log("formState cambió");
    }, [formState]);

    useEffect(() => {
        // console.log("email cambió");
    }, [correo]);

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input type="text" placeholder="Nombre" name="nombre" className="form-control" onChange={handleInputChange} value={nombre} autoComplete="off"/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Correo" name="correo" className="form-control" onChange={handleInputChange} value={correo} autoComplete="off"/>
            </div>  
            { (nombre === '123') && <Message /> }       
        </>
    )
}
