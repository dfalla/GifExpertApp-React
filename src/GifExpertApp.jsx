import { useState } from "react";
import { AgregarPersonaje } from "./components/AgregarPersonaje"
import { MostrarPersonajes } from "./components/MostrarPersonajes";

export const GifExpertApp = () => {
    const [personajes, setPersonajes] = useState(['Dragon Ball']);

    const onAddPersonaje = (newPersonaje) =>{
        if(personajes.includes(newPersonaje)) return;

        setPersonajes((personajes)=>[newPersonaje, ...personajes]);
    }

    console.log(personajes);
  return (
    <>
        <h1>GifExpertApp</h1>
        <AgregarPersonaje
            newPersonaje={(e)=>onAddPersonaje(e)}
        />

        {
            personajes.map((personaje)=>(
                <MostrarPersonajes
                    key={personaje}
                    personaje={personaje}
                />
            ))
        }
    </>
  )
}

