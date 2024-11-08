import React from "react";
import TableRow from "./TableRow"; //  un componente que se encargará de renderizar una fila para cada persona en la tabla.

function PersonTable({ personas }) {
  //  Esta propiedad recibe un array de objetos que representan a las personas. Cada objeto debe contener la información que se quiere mostrar en la tabla, como nombre, sexo, país y telefono.
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Sexo</th>
          <th>País</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {/* Si hay datos, se recorre el array personas con el método .map() para generar una fila (<TableRow>) para cada persona. Cada TableRow recibe la propiedad persona con los datos de cada persona y una key única basada en el índice de la persona en el array */}
        {personas.length > 0 ? (
          personas.map((persona, index) => (
            <TableRow key={index} persona={persona} />
          ))
        ) : (
          // Si no hay datos, se muestra un mensaje personalizado.
          <tr>
            <td colSpan="4" className="no-data-message">
              No se encontraron personas
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PersonTable;
// El componente PersonTable muestra una tabla con la lista de personas, usando el componente TableRow para generar las filas de la tabla.
