export class View {
    constructor(seletor) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`O seletor ${seletor} não existe!`);
        }
    }
    update(model, alert = true) {
        let template = this.template(model, alert);
        this.elemento.innerHTML = template;
    }
}
