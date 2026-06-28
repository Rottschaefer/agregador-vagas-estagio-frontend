import { useBuscaVagas } from "../hooks/useBuscaVagas";
import useBuscaStore from "../store/BuscaStore";

const ListaVagas = () => {

    const nomeVaga = useBuscaStore((s) => s.nomePesquisa);
    const localidade = useBuscaStore((s) => s.localPesquisa);
    const fonteSelecionada = useBuscaStore((s) => s.fontePesquisa);

    const {
        data: vagas,
        isFetching: isFetching,
        error: error,
    } = useBuscaVagas(nomeVaga, localidade, fonteSelecionada);

    if(isFetching) return <p>Buscando...</p>

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