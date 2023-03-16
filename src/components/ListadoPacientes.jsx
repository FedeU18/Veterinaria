import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.length &&
        pacientes.map((p) => {
          return (
            <Paciente
              key={p.id}
              mascota={p.mascota}
              propietario={p.propietario}
              email={p.email}
              alta={p.email}
              síntomas={p.síntomas}
            />
          );
        })}
    </div>
  );
};

export default ListadoPacientes;
