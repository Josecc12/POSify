import React, { Component } from 'react';
import 'tailwindcss/tailwind.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PosifyLayout } from '../../../layout/PosifyLayout';
import { Input, Button } from "@material-tailwind/react";

class AgregarEmpleado extends Component {
  state = {
    nombre: '',
    apellido: '',
    fecha_nac: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // Puedes agregar aquí la lógica para guardar el nuevo empleado si es necesario

    this.setState({
      nombre: '',
      apellido: '',
      puesto:'',
      fecha_nac: null,
    });
  };

  render() {
    return (
      <PosifyLayout>
        <div className="flex w-72 flex-col gap-6">
            <form onSubmit={this.handleSubmit}>
              <div class="relative h-11 w-full min-w-[200px] my-10 mx-7">
                <input
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.handleChange}
                  placeholder="Nombre"
                  class="peer h-full w-full border-b border-blue-gray-200 
                        bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal 
                        text-blue-gray-700 outline outline-0 transition-all 
                        placeholder-shown:border-blue-gray-200 focus:border-indigo-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
                <label class="after:content[' '] pointer-events-none absolute left-0 
                              -top-2.5 flex h-full w-full select-none text-sm font-normal 
                              leading-tight text-blue-gray-500 transition-all after:absolute 
                              after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 
                              after:border-indigo-500 after:transition-transform after:duration-300 
                              peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 
                              peer-focus:text-sm peer-focus:leading-tight peer-focus:text-indigo-500 
                              peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent 
                              peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Nombre
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px] my-10 mx-7">
                <input
                  name="apellido"
                  value={this.state.apellido}
                  onChange={this.handleChange}
                  placeholder="Apellido"
                  class="peer h-full w-full border-b border-blue-gray-200 
                        bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal 
                        text-blue-gray-700 outline outline-0 transition-all 
                        placeholder-shown:border-blue-gray-200 focus:border-indigo-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                <label class="after:content[' '] pointer-events-none absolute left-0 
                              -top-2.5 flex h-full w-full select-none text-sm font-normal 
                              leading-tight text-blue-gray-500 transition-all after:absolute 
                              after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 
                              after:border-indigo-500 after:transition-transform after:duration-300 
                              peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 
                              peer-focus:text-sm peer-focus:leading-tight peer-focus:text-indigo-500 
                              peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent 
                              peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Apellido
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px] my-10 mx-7">
                <input
                  name="puesto"
                  value={this.state.puesto}
                  onChange={this.handleChange}
                  placeholder="Puesto"
                  class="peer h-full w-full border-b border-blue-gray-200 
                        bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal 
                        text-blue-gray-700 outline outline-0 transition-all 
                        placeholder-shown:border-blue-gray-200 focus:border-indigo-500 
                        focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  />
                <label class="after:content[' '] pointer-events-none absolute left-0 
                              -top-2.5 flex h-full w-full select-none text-sm font-normal 
                              leading-tight text-blue-gray-500 transition-all after:absolute 
                              after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 
                              after:border-indigo-500 after:transition-transform after:duration-300 
                              peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 
                              peer-focus:text-sm peer-focus:leading-tight peer-focus:text-indigo-500 
                              peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent 
                              peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Puesto
                </label>
              </div>
              <div class="relative h-11 w-full min-w-[200px] my-10 mx-7">
              <DatePicker
                name = 'fecha de nacimiento'
                selected={this.state.fecha_nac}
                onChange={date => this.setState({ fecha_nac: date })}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                className="my-5 peer h-full w-full rounded-[7px] border border-blue-gray-200  
                          bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 
                          transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 
                          placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-purple-500 
                          focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <label class="after:content[' '] pointer-events-none absolute left-0 
                              -top-2.5 flex h-full w-full select-none text-sm font-normal 
                              leading-tight text-blue-gray-500 transition-all after:absolute 
                              after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 
                              after:border-indigo-500 after:transition-transform after:duration-300 
                              peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 
                              peer-focus:text-sm peer-focus:leading-tight peer-focus:text-indigo-500 
                              peer-focus:after:scale-x-100 peer-focus:after:border-indigo-500 peer-disabled:text-transparent 
                              peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Fecha de nacimiento
              </label>
              </div>
              
              <Button type="submit" color="indigo" className=' mx-7'>
                Agregar Empleado
              </Button>
              
            </form>
        </div>
      </PosifyLayout>
    );
  }
}

export default AgregarEmpleado;

