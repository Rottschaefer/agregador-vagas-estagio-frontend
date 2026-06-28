import { useQuery } from "@tanstack/react-query";
import { URL_BASE } from "../utils/constantes";

const fetchVagas = async (nome: string, local: string, fonte: string) => {
  const fonteParam = fonte === "Todas" ? "" : fonte.toLowerCase();

  const url = `${URL_BASE}/buscar-vagas/${fonteParam}?termo=${nome}&local=${local}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Erro ao buscar as vagas");
  }

  return response.json();
};

export function useBuscaVagas(nome: string, local: string, fonte: string) {
  return useQuery({
    queryKey: ["vagas", nome, local, fonte],
    queryFn: () => fetchVagas(nome, local, fonte),
    enabled: false,
  });
}
