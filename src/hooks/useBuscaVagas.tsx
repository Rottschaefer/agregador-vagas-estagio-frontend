import { useQuery } from "@tanstack/react-query";
import { URL_BASE } from "../utils/constantes";

const fetchVagas = async () => {
  const response = await fetch(`${URL_BASE}/buscar-vagas?termo=estagio`);

  if (!response.ok) {
    throw new Error("Erro ao buscar as vagas da API");
  }

  return response.json();
};

export function useBuscaVagas() {
  return useQuery({
    queryKey: ["vagas"],
    queryFn: fetchVagas,
  });
}
