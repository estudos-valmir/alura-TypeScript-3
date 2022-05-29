export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLInputElement;
        } else {
            throw Error(`O seletor ${seletor} não existe!`);
        }
    }

    protected abstract template(model: T, alert?: boolean): string;

    public update(model: T, alert: boolean = true): void {
        let template = this.template(model, alert);

        this.elemento.innerHTML = template;
    }
}
