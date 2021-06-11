import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {        
        return () => {
            console.log("SE desmontó el mensaje");
        }
    }, [])
    return (
        <div>
            <h3>Eres genial!!!</h3>
        </div>
    )
}
