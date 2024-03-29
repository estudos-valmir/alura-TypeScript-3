export function Escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let retorno = metodoOriginal.apply(this, args);

        console.log(
            `@Escapar em ação na classe${this.constructor.name} para o método ${propertyKey}`
        );
        if (typeof retorno === "string")
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");

        return retorno;
    };

    return descriptor;
}
