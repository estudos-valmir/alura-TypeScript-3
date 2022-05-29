export class Utilitario {
    static obterDiaSemana(date) {
        return date.toLocaleDateString("en-US", { weekday: "long" });
    }
    imprimir(...args) {
        for (const dado of args) {
            console.log(dado.paraTexto());
        }
    }
}
