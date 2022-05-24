export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`O seletor ${seletor} não existe!`);
        }
        if (escapar)
            this.escapar = escapar;
    }
    update(model, alert = true) {
        let template = this.template(model, alert);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
