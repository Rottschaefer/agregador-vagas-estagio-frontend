import BuscaForm from "../components/BuscaForm";
import Header from "../components/Header";
import ListaVagas from "../components/ListaVagas";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <Header />
      <BuscaForm />
      <ListaVagas />
    </div>
  );
};

export default HomePage;
