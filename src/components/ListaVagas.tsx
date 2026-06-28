import { useState } from "react";
import { useBuscaVagas } from "../hooks/useBuscaVagas";
const ListaVagas = () => {
    const [nomeVaga] = useState("");
    const [localidade] = useState("");
    const [fonteSelecionada] = useState("gupy");

    const {
        data: vagas,
        isFetching,
        error,
        refetch,
    } = useBuscaVagas(nomeVaga, localidade, fonteSelecionada);

    {/* Exibição dos Resultados da API */}
    return (
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
    )
}
export default ListaVagas