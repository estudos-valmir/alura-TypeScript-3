export class Utilitario {
    static obterDiaSemana(date) {
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    }
}
