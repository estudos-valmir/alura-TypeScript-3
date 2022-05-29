import { INegociacaoDia } from "../interfaces/INegociacaoDia.js";
import { Negociacao } from "../models/Negociacao.js";

export class NegociacaoService {
    constructor() {}

    public obterNegociaoDia(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
            .then((resposta) => resposta.json())
            .then((dados: INegociacaoDia[]) => {
                return dados.map((dadoHoje) => {
                    return new Negociacao(
                        new Date(),
                        dadoHoje.vezes,
                        dadoHoje.montante
                    );
                });
            });
    }
}
