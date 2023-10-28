import React, { Component } from 'react';
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
      fecha_nac: null,
    });
  };

  render() {
    return (
      <PosifyLayout>
        <div className="flex w-72 my-10 mx-5 flex-col gap-6">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              variant="standard" 
              placeholder="Nombre" 
            />
            <Input
              name="apellido"
              value={this.state.apellido}
              onChange={this.handleChange}
              variant="standard" 
              placeholder="Apellido" 
            />
            <DatePicker
              name = 'fecha de nacimiento'
              selected={this.state.fecha_nac}
              onChange={date => this.setState({ fecha_nac: date })}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              className='w-200 my-5 border-gray-300 rounded'
            />
            <Button type="submit" color="black" ripple="light" className='my-5'>
              Agregar Empleado
            </Button>
          </form>
        </div>
      </PosifyLayout>
    );
  }
}

export default AgregarEmpleado;

