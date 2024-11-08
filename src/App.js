import logo from "./logo.svg";
import data from "./data.json";
import PersonTable from "./components/PersonTable"; //Un componente que renderiza una tabla con la lista de personas.
import Filter from "./components/Filter"; // Un componente que permite aplicar un filtro a las personas.
import React, { useState, useEffect } from "react"; //Se usan para manejar el estado y los efectos secundarios.
import "./App.css";

function App() {
  const [personas, setPersonas] = useState([]); // Estado que guarda la lista de personas (inicialmente vacío).
  const [filtro, setFiltro] = useState(""); // Estado que almacena el texto de búsqueda (filtro).

  useEffect(() => {
    setPersonas(data); // Cuando el componente se monta, se asigna el contenido de data (el archivo JSON) al estado personas.
  }, []);

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value); // Una función que se ejecuta cada vez que cambia el valor del filtro. Actualiza el estado filtro con el valor ingresado.
  };

  // Filtra la lista de personas para que solo se muestren aquellas cuyo nombre o país contengan el texto del filtro (sin importar mayúsculas o minúsculas).
  const personasFiltradas = personas.filter(
    (persona) =>
      persona.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      persona.pais.toLowerCase().includes(filtro.toLowerCase())
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Información de Personas</h1>
        {/* Filter se usa para permitir al usuario ingresar un filtro. Recibe el
        estado filtro y una función onFiltroChange para actualizarlo. */}
        <Filter filtro={filtro} onFiltroChange={handleFiltroChange} />
        {/* recibe las personas filtradas y las muestra en una tabla */}
        <PersonTable personas={personasFiltradas} />
      </header>
    </div>
  );
}

export default App;
// El componente App muestra una lista de personas que se puede filtrar por nombre o país, y utiliza componentes separados para el filtro y la tabla.
