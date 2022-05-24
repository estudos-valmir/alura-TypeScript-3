import { View } from './View.js';
export class MensagemView extends View {
    template(model, sucesso = true) {
        let tipoAlert = 'alert-info';
        if (!sucesso)
            tipoAlert = 'alert-warning';
        return `
            <p class="alert ${tipoAlert}">${model}</p>
        `;
    }
}
