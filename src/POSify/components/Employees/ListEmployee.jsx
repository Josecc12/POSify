import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AgregarEmpleado from './AddEmployee';
import { Pagination } from '../Pagination';
import { Input, Button } from "@material-tailwind/react";
class ListEmployee extends Component {
  state = {
    empleados: [],
    empleadosSeleccionados: {},
    currentPage: 1, // Página actual
    itemsPerPage: 10, // Cantidad de elementos por página
    searchTerm: '', // Término de búsqueda
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

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  setCurrentPage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const { empleados, empleadosSeleccionados, currentPage, itemsPerPage, searchTerm } = this.state;

    // Filtrar empleados basados en el término de búsqueda
    const filteredEmpleados = empleados.filter((empleado) =>
      `${empleado.nombre} ${empleado.apellido} ${empleado.puesto} ${empleado.fechaNacimiento}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    // Calcula el índice del primer elemento en la página actual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentEmpleados = filteredEmpleados.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className="h-full max-h-screen p-6 overflow-x-auto border-gray-400 border-solid">
        <div className="text-sm bg-white divide-y-2 divide-gray-200 overflow-x-auto overflow-y-auto shadow-md">
          <button
            type="submit"
            className="inline-block px-4 py-2 mx-5 my-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover-bg-transparent hover-text-indigo-600 focus-outline-none focus-ring active-text-indigo-500"
          >
            <Link to="./AddEmployee">Agregar Empleado +</Link>
          </button>
          <button
            onClick={this.handleSubmitEliminar}
            className="inline-block px-4 py-2 mx-5 my-5 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover-bg-transparent hover-text-indigo-600 focus-outline-none focus-ring active-text-indigo-500"
          >
            Quitar empleado
          </button>
          <input
            type="text"
            placeholder="Buscar empleado"
            value={searchTerm}
            onChange={this.handleSearch}
            className="mx-6 my-6 mt-4 px-3 py-2 text-sm rounded border border-indigo-300 focus-outline-none focus-ring"
          />
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
                <th className="px-20 py-2">Apellido</th>
                <th className="px-20 py-2">Puesto</th>
                <th className="px-20 py-2">Fecha de Nacimiento</th>
              </tr>
            </thead>
            <tbody>
              {currentEmpleados.map((empleado, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border-gray-300 rounded"
                      checked={empleadosSeleccionados[index] || false}
                      onChange={() => this.handleEliminarEmpleado(index)}
                    />
                  </td>
                  <td className="px-4 py-2">{empleado.nombre}</td>
                  <td className="px-4 py-2">{empleado.apellido}</td>
                  <td className="px-4 py-2">{empleado.puesto}</td>
                  <td className="px-4 py-2">{empleado.fechaNacimiento}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="my-5">
            <Pagination
              totalItems={filteredEmpleados.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={this.setCurrentPage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ListEmployee;






