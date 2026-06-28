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

    if(isFetching) return <p className="text-center text-base font-thin md:text-start md:ms-2">Buscando...</p>

    {/* Exibição dos Resultados da API */}
    return (
        <div className="w-full px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-8 pb-8">
            {error && (
                <>
                    <div className="">
                        <p className="text-2xl font-semibold text-purple-500">
                            Oops...
                        </p>
                        <p className="text-xl mt-5">
                            Algo deu <span className="text-teal-600">errado!</span> 🫤 
                        </p>
                        <p className="mt-3">
                            Erro: {error.message}
                        </p>
                    </div>
                </>
            )}

            {!error && vagas?.map((vaga: any) => (
                
                <a href={vaga.link} target="_blank" className="block">
                    <div                    key={vaga.id}
                    className="bg-gray-100 rounded-3xl p-6 text-purple-600 shadow-md h-full"
                    >
                        <div className="flex justify-between items-start">
                            <h2 className="text-xl font-bold">{vaga.titulo}</h2>

                            <p className="text-gray-100 text-xs font-bold uppercase tracking-widest bg-teal-400/55 px-1.5 rounded-2xl ms-3 me-1 mt-2">
                            {vaga.fonte}
                            </p>
                        </div>

                        <p className="text-gray-600 font-medium mt-1">{vaga.empresa}</p>
                        <p className="text-gray-600">{vaga.localizacao}</p>
                    </div>
                </a>
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