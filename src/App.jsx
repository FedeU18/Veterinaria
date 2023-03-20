import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [infoPaciente, setInfoPaciente] = useState({});

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("pacientes")).length > 0) {
      setPacientes(JSON.parse(localStorage.getItem("pacientes")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPacientes={setPacientes}
          pacientes={pacientes}
          infoPaciente={infoPaciente}
          setInfoPaciente={setInfoPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setInfoPaciente={setInfoPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
