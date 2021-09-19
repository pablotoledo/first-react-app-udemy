import React from "react";

export default function Saludar(props) {
    const {user, saludarFn} = props;
    const {nombre = "Anonimo", edad, color} = user;

    console.log(props);

    return(
        <div>
            <h2>
                Hola {nombre}, tiene {edad} años y su color preferido es el {color}
            </h2>
            <button onClick={() => saludarFn(nombre,edad)}>Saludar</button>
        </div>
    )

}
