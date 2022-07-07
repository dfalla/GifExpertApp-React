import { useState } from "react";

export const AgregarPersonaje = ({newPersonaje}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = ({target})=>{
        setInputValue(target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim()<=1) return;
        newPersonaje(inputValue.trim());
        setInputValue('');
    }
  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder={"Buscar personaje"}
            value={inputValue}
            onChange={handleChange}
        />
    </form>
  )
}

