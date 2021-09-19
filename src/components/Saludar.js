import React from "react";

export default function Saludar(props) {

    console.log(props);

    return(
        <div>
            <h2>
                Hola {props.user.nombre}, tiene {props.user.edad} años y su color preferido es el {props.user.color}
            </h2>
            <button onClick={() => props.saludarFn(props.user.nombre)}>Saludar</button>
        </div>
    )

}
