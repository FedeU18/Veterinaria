import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setInfoPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.length &&
            pacientes.map((p) => {
              return (
                <Paciente
                  key={p.id}
                  id={p.id}
                  mascota={p.mascota}
                  propietario={p.propietario}
                  email={p.email}
                  alta={p.alta}
                  síntomas={p.síntomas}
                  setInfoPaciente={setInfoPaciente}
                />
              );
            })}
        </>
      ) : (
        <>
          {" "}
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes y{" "}
            <span className="text-indigo-600 font-bold">
              aparecerán acá abajo
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
