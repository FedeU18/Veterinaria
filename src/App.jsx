import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [infoPaciente, setInfoPaciente] = useState({});
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          setPacientes={setPacientes}
          pacientes={pacientes}
          infoPaciente={infoPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setInfoPaciente={setInfoPaciente}
        />
      </div>
    </div>
  );
}

export default App;
