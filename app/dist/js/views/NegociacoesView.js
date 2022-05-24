import { Utilitario } from '../Ultils/Utilitario.js';
import { View } from './View.js';
export class NegociacoesView extends View {
    template(model) {
        let teste;
        const template = `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>QUANTIDADE</th>
                        <th>DIA DA SEMANA</th>
                    </tr>
                    <tbody>
                        ${teste = model.listar().map(negociacao => {
            return `
                <tr>
                    <td>${this.formatar(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${Utilitario.obterDiaSemana(negociacao.data)}</td>
                </tr>
                `;
        }).join('')}
                    </tbody>
                </thead>
            </table>
        `;
        return template;
    }
    formatar(data) {
        return Intl.DateTimeFormat().format(data);
    }
}
