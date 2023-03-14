import Form from "./components/Form";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
