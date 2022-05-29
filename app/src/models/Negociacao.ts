import { IComparable } from "../interfaces/IComparable.js";
import { IModel } from "../interfaces/IModel.js";

export class Negociacao implements IModel<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public get volume(): number {
        return this.quantidade * this.valor;
    }

    public get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criarDe(
        dateString: string,
        quantidadeString: string,
        valorString: string
    ): Negociacao {
        const exp: RegExp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);

        return new Negociacao(date, quantidade, valor);
    }

    public paraTexto(): string {
        return `
         Data: ${this._data}
         Quantidade: ${this.quantidade}
         Valor: ${this.valor}`;
    }

    ehIgual(negociacao: Negociacao): boolean {
        return (
            this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear()
        );
    }
}
