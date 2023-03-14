import React from "react";

const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">Fede</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">10/12</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
          voluptates iusto explicabo pariatur facere optio fugiat consectetur
          similique! Laboriosam repellat aliquam distinctio eaque enim dicta
          laudantium perspiciatis quisquam, minima beatae.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
