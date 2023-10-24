import React from 'react';
import '../css/Boton.css';

function Boton(props) {

    const esOperador = valor =>{
        // isNaN se utiliza para verificar si una cadena de caracteres no es un numero
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return(
        //lo que estamos haciendo es que si el resultado de esta funcion ${esOperador(props.children) es
        //true entonces se remplaza toda esta funcion ${esOperador(props.children) ? 'operador' : null}`
        //por 'operador' si llega ser falsa llama a Null
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;