function TableRow({ persona }) {
  // El componente recibe un objeto persona como propiedad (props). Este objeto contiene los datos de una persona, como nombre, sexo, pais y telefono
  return (
    <tr>
      {/* Muestra el nombre de la persona, sexo, pais, telefono, accediendo a la propiedad nombre del objeto persona. */}
      <td>{persona.nombre}</td>
      <td>{persona.sexo}</td>
      <td>{persona.pais}</td>
      <td>{persona.telefono}</td>
    </tr>
  );
}

export default TableRow;
// El componente TableRow es una función que recibe un objeto persona y renderiza una fila de tabla con la información de esa persona
