import React from "react";

const Paciente = ({
  mascota,
  propietario,
  email,
  alta,
  síntomas,
  id,
  setInfoPaciente,
}) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{síntomas}</span>
      </p>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="py-2 px-10 font-bold uppercase bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-center"
          onClick={() =>
            setInfoPaciente({ mascota, propietario, email, alta, síntomas, id })
          }
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 font-bold uppercase bg-red-600 hover:bg-red-700 text-white rounded-md text-center"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
