function Filter({ filtro, onFiltroChange }) {
  //  filtro: Esta propiedad recibe el valor actual del filtro (una cadena de texto) que se utilizará para filtrar los datos. Proviene del estado en el componente padre (como App en el código anterior).
  // onFiltroChange: Esta propiedad es una función que se ejecuta cada vez que el usuario cambia el texto en el campo de entrada. Esta función se pasa desde el componente padre para actualizar el estado filtro.
  return (
    <div>
      <input
        type="text"
        placeholder="Filtrar por nombre o país"
        value={filtro} //  El valor del campo de entrada está vinculado al estado filtro. Esto asegura que el campo de entrada muestre siempre el valor actual de filtro.
        onChange={onFiltroChange} // La función onFiltroChange se pasa como una propiedad y se usa para actualizar el estado filtro en el componente padre.
      />
    </div>
  );
}

export default Filter;
// El componente Filter renderiza un campo de entrada de texto donde el usuario puede escribir un filtro para buscar personas por nombre o país.
