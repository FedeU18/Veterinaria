import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ setPacientes, pacientes }) => {
  const [paciente, setPaciente] = useState({
    mascota: "",
    propietario: "",
    email: "",
    alta: "",
    síntomas: "",
  });

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const [error, setError] = useState(false);
  const handleOnChange = (e) => {
    setPaciente({ ...paciente, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        paciente.mascota,
        paciente.propietario,
        paciente.email,
        paciente.alta,
        paciente.síntomas,
      ].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);
    setPacientes([...pacientes, { ...paciente, id: generarId() }]);
    setPaciente({
      mascota: "",
      propietario: "",
      email: "",
      alta: "",
      síntomas: "",
    });
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl py-10 px-5 mb-5"
      >
        {error && <Error mensaje="Todos los cambios son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            name="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="text"
            placeholder="Nombre de la mascota"
            value={paciente.mascota}
            onChange={handleOnChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            name="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="text"
            placeholder="Nombre del propietario"
            value={paciente.propietario}
            onChange={handleOnChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="email"
            placeholder="Email"
            value={paciente.email}
            onChange={handleOnChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de Alta
          </label>
          <input
            id="alta"
            name="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="date"
            value={paciente.alta}
            onChange={handleOnChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="síntomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="síntomas"
            name="síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="date"
            placeholder="Describe los Síntomas"
            value={paciente.síntomas}
            onChange={handleOnChange}
            autoComplete="off"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-gray-100 uppercase font-bold  hover:bg-indigo-700 cursor-pointer rounded-sm transition-colors "
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Form;
