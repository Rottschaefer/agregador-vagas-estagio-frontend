import { create } from "zustand"

interface BuscaStore {
    nomeInput: string,
    nomePesquisa: string,
    localInput: string,
    localPesquisa: string,
    fonteInput: string,
    fontePesquisa: string,

    setNomeInput: (novoNomeInput: string) => void,
    setNomePesquisa: (novoNomePesquisa: string) => void,
    setLocalInput: (novoLocalInput: string) => void,
    setLocalPesquisa: (novoLocalPesquisa: string) => void,
    setFonteInput: (novoFonteInput: string) => void,
    setFontePesquisa: (novoFontePesquisa: string) => void,

    buscar: () => void,
}

const useBuscaStore = create<BuscaStore>((set, get) => ({
    nomeInput: "",
    nomePesquisa: "",
    localInput: "",
    localPesquisa: "",
    fonteInput: "gupy",
    fontePesquisa: "gupy",

    setNomeInput: (novoNomeInput: string) => set(() => ({nomeInput: novoNomeInput})),
    setNomePesquisa: (novoNomePesquisa: string) => set(() => ({nomePesquisa: novoNomePesquisa})),
    setLocalInput: (novoLocalInput: string) => set(() => ({localInput: novoLocalInput})),
    setLocalPesquisa: (novoLocalPesquisa: string) => set(() => ({localPesquisa: novoLocalPesquisa})),
    setFonteInput: (novoFonteInput: string) => set(() => ({fonteInput: novoFonteInput})),
    setFontePesquisa: (novoFontePesquisa: string) => set(() => ({fontePesquisa: novoFontePesquisa})),

    buscar: () => set({
        nomePesquisa: get().nomeInput,
        localPesquisa: get().localInput,
        fontePesquisa: get().fonteInput,
    }),
}));

export default useBuscaStore