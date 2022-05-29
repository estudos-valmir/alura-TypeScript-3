import { IPrintable } from "../interfaces/IPrintable.js";

export class Utilitario {
    public static obterDiaSemana(date: Date): string {
        return date.toLocaleDateString("en-US", { weekday: "long" });
    }

    public imprimir(...args: IPrintable[]): void {
        for (const dado of args) {
            console.log(dado.paraTexto());
        }
    }
}
