import { IComparable } from "../interfaces/IComparable.js";
import { IModel } from "../interfaces/IModel.js";
import { Negociacao } from "./Negociacao.js";

export class Negociacoes implements IModel<Negociacoes> {
    private negociacoes: Negociacao[] = [];

    public adicionar(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
    }
}
