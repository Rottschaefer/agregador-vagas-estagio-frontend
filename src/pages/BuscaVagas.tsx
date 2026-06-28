import { useBuscaVagas } from "../hooks/useBuscaVagas";

const BuscaVagas = () => {
  const { data: vagas, isPending, error } = useBuscaVagas();

  if (isPending) return <p>Carregando vagas...</p>;
  if (error) return <p>Ops, deu erro: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vagas Disponíveis</h1>

      <ul>
        {vagas?.map((vaga: any) => (
          <li key={vaga.id} className="mb-2 border p-2 rounded">
            {vaga.titulo} {/* Ajuste para o nome correto do campo da sua API */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscaVagas;
