import React from "react";

export default function Saludar(props) {
    const {user, saludarFn} = props;
    const {nombre, edad, color} = user;

    console.log(user)
    console.log(saludarFn)

    console.log(props);

    return(
        <div>
            <h2>
                Hola {nombre}, tiene {edad} años y su color preferido es el {color}
            </h2>
            <button onClick={() => saludarFn(nombre)}>Saludar</button>
        </div>
    )

}
