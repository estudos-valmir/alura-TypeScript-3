export function LogarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        let divisor = 1;
        let unidade = "milisegundos";
        if (emSegundos) {
            divisor = 1000;
            unidade = "segundos";
        }
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} - o tempo de execução foi: ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        };
        return descriptor;
    };
}
