export function DomInject(seletor: string) {
    return function (target: any, propertyKey: string) {
        let elemento: HTMLElement;

        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(
                    `Buscando elemento do DOM com o seletor ${seletor} para injetar ${propertyKey}`
                );
            }

            return elemento;
        };

        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
