import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AgregarEmpleado from './AddEmployee';
class ListEmployee extends Component {
  state = {
    empleados: [],
    empleadosSeleccionados: {},
  };

  handleEliminarEmpleado = (index) => {
    const { empleadosSeleccionados } = this.state;
    const nuevosEmpleadosSeleccionados = { ...empleadosSeleccionados };

    nuevosEmpleadosSeleccionados[index] = !nuevosEmpleadosSeleccionados[index];

    this.setState({
      empleadosSeleccionados: nuevosEmpleadosSeleccionados,
    });
  };

  handleSubmitEliminar = (e) => {
    e.preventDefault();

    const { empleados, empleadosSeleccionados } = this.state;

    // Filtra los empleados que no están seleccionados
    const empleadosFiltrados = empleados.filter(
      (_, index) => !empleadosSeleccionados[index]
    );

    this.setState({
      empleados: empleadosFiltrados,
      empleadosSeleccionados: {},
    });
  };

  render() {
    return (
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
        <div className="text-sm bg-white divide-y-2 divide-gray-200 overflow-x-auto overflow-y-auto shadow-2xl">
          <button
            type="submit"
            className="inline-block px-4 py-2  mx-5 my-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            <Link to= "./AddEmployee">Agregar Empleado +</Link>
          </button>
          <button
            onClick={this.handleSubmitEliminar}
            className="inline-block px-4 py-2 mx-5 my-5 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Quitar empleado
          </button>
          <table>
            <thead>
              <tr>
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    id="SelectAll"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
                </th>
                <th className="px-20 py-2">Nombre</th>
                <th className="px-4 py-2">Puesto</th>
              </tr>
            </thead>
            <tbody>
              {this.state.empleados.map((empleado, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-gray-300 rounded"
                      checked={this.state.empleadosSeleccionados[index] || false}
                      onChange={() => this.handleEliminarEmpleado(index)}
                    />
                  </td>
                  <td className="px-4 py-2">
                    {empleado.nombre} {empleado.apellido}
                  </td>
                  <td className="px-4 py-2">{empleado.puesto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListEmployee;






