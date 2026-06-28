import { useState } from "react";
import { useBuscaVagas } from "../hooks/useBuscaVagas";

const BuscaVagas = () => {
  const [nomeVaga, setNomeVaga] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [fonteSelecionada, setFonteSelecionada] = useState("gupy");

  const fontes = ["Gupy", "LinkedIn", "Vagas.com"];

  const {
    data: vagas,
    isFetching,
    error,
    refetch,
  } = useBuscaVagas(nomeVaga, localidade, fonteSelecionada);

  const handleBuscar = () => {
    refetch();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="bg-blue-600 w-full py-6 text-center shadow-sm mb-8">
        <h1 className="text-white text-2xl font-bold">Agrega Estágio</h1>
      </header>

      <div className="w-full max-w-md px-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nome da vaga"
          value={nomeVaga}
          onChange={(e) => setNomeVaga(e.target.value)}
          className="w-full bg-teal-400 placeholder-teal-700 text-white font-medium rounded-full py-4 text-center outline-none"
        />

        <input
          type="text"
          placeholder="Localidade"
          value={localidade}
          onChange={(e) => setLocalidade(e.target.value)}
          className="w-full bg-teal-400 placeholder-teal-700 text-white font-medium rounded-full py-4 text-center outline-none"
        />

        {/* Botões horizontais para escolher a plataforma */}
        <div className="flex justify-center gap-2 overflow-x-auto py-2">
          {fontes.map((fonte) => (
            <button
              key={fonte}
              onClick={() => setFonteSelecionada(fonte)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                fonteSelecionada === fonte
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {fonte}
            </button>
          ))}
        </div>

        <button
          onClick={handleBuscar}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full py-4 text-center shadow-lg transition-all"
        >
          {isFetching ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {/* Exibição dos Resultados da API */}
      <div className="w-full max-w-md px-4 flex flex-col gap-4 mt-8 pb-8">
        {error && (
          <p className="text-red-500 text-center">Ops, erro: {error.message}</p>
        )}

        {vagas?.map((vaga: any) => (
          <div
            key={vaga.id}
            className="bg-teal-400 rounded-3xl p-6 text-center text-white shadow-md"
          >
            <h2 className="text-xl font-bold mb-1">{vaga.titulo}</h2>
            <p className="text-teal-100 font-medium">{vaga.empresa}</p>
            <p className="text-teal-100">{vaga.localidade || vaga.local}</p>
            <p className="text-teal-800 text-sm font-bold mt-2 uppercase tracking-widest">
              {vaga.fonte}
            </p>
          </div>
        ))}

        {vagas?.length === 0 && (
          <p className="text-gray-500 text-center">
            Nenhuma vaga encontrada para essa busca.
          </p>
        )}
      </div>
    </div>
  );
};

export default BuscaVagas;
