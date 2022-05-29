import { Negociacao } from "../models/Negociacao.js";
export class NegociacaoService {
    constructor() { }
    obterNegociaoDia() {
        return fetch("http://localhost:8080/dados")
            .then((resposta) => resposta.json())
            .then((dados) => {
            return dados.map((dadoHoje) => {
                return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante);
            });
        });
    }
}
