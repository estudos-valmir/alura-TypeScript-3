import { NegociacaoController } from "./controllers/NegociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
const importar = document.querySelector("#botao-importar");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw Error("Form não existe!");
}
if (importar) {
    importar.addEventListener("click", () => {
        controller.importarDados();
    });
}
else {
    throw new Error("Botão de importar não existe");
}
