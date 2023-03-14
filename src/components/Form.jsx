import { useState, useEffect } from "react";

const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="mt-5 text-lg text-center mb-10">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-lg rounded-xl py-10 px-5 mb-5">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="text"
            placeholder="Nombre de la mascota"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="text"
            placeholder="Nombre del propietario"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="email"
            placeholder="Email"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="date"
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
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md font-bold"
            type="date"
            placeholder="Describe los Síntomas"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-gray-100 uppercase font-bold  hover:bg-indigo-700 cursor-pointer transition-colors "
          value="Agregar Paciente"
        />
      </form>
    </div>
  );
};

export default Form;
