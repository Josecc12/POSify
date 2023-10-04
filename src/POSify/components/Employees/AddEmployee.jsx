import React, { Component } from 'react';

class AgregarEmpleado extends Component {
  state = {
    nombre: '',
    apellido: '',
    puesto: '',
    empleados: [],
    empleadosSeleccionados: {},
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const nuevoEmpleado = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      puesto: this.state.puesto,
    };

    this.setState((prevState) => ({
      empleados: [...prevState.empleados, nuevoEmpleado],
      nombre: '',
      apellido: '',
      puesto: '',
    }));
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
        <form onSubmit={this.handleSubmit}>
          <div className="form-group my-5">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              className='self-center w-full mx-2 text-sm text-gray-700 border-indigo-500 rounded h-7'
            />
          </div>
          <div className="form-group my-5">
            <label htmlFor="apellido">Apellido:</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={this.state.apellido}
              onChange={this.handleChange}
              className='self-center w-full mx-2 text-sm text-gray-700 border-indigo-500 rounded h-7'
            />
          </div>
          <div className="form-group my-5">
            <label htmlFor="puesto">Puesto:</label>
            <input
              type="text"
              id="puesto"
              name="puesto"
              value={this.state.puesto}
              onChange={this.handleChange}
              className='self-center w-full mx-2 text-sm text-gray-700 border-indigo-500 rounded h-7'
            />
          </div>
          <button
            type="submit"
            className="inline-block px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Agregar Empleado
          </button>
          <button
            onClick={this.handleSubmitEliminar}
            className="inline-block px-4 py-2 mx-5 mt-4 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Quitar empleado
          </button>
        </form>
        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Lista de Empleados</h3>
          <table className="text-sm bg-white divide-y-2 divide-gray-200  overflow-x-auto overflow-y-auto shadow-2xl">
            <thead>
              <tr>
                <th className="px-4 py-2">
                  <input
                    type="checkbox"
                    id="SelectAll"
                    className="w-5 h-5 border-gray-300 rounded"
                  />
                </th>
                <th className="px-4 py-2">Nombre</th>
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

export default AgregarEmpleado;





