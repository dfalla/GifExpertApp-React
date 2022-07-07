import { useFetchGifs } from "../hooks/useFetchGifs"
import { PersonajeItem } from "./PersonajeItem";

export const MostrarPersonajes = ({personaje}) => {
    const { images, isLoading } = useFetchGifs(personaje);
  return (
    <>
        {
            <h3>{personaje}</h3>
        }
        {
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            {
                images.map((image)=>(
                    <PersonajeItem
                        key={image.id}
                        {...image}
                    />
                ))
            }
        </div>
    </>
  )
}