import useBuscaStore from "../store/BuscaStore";

const BuscaForm = () => {

    const nomeVaga = useBuscaStore((s) => s.nomeInput);
    const setNomeVaga = useBuscaStore((s) => s.setNomeInput);
    const localidade = useBuscaStore((s) => s.localInput);
    const setLocalidade = useBuscaStore((s) => s.setLocalInput);
    const fonteSelecionada = useBuscaStore((s) => s.fonteInput);
    const setFonteSelecionada = useBuscaStore((s) => s.setFonteInput);

    const handleBuscar = useBuscaStore((s) => s.buscar);
    
    const fontes = [
        "Gupy",
        "Glassdoor",
        "InfoJobs",
        "EstagiarBR",
        "AcademiaUniversitario",
    ];

    return (
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
            <div className="flex overflow-x-auto whitespace-nowrap w-full pb-2 gap-2">
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
                    Buscar
            </button>
        </div>
    )
}
export default BuscaForm