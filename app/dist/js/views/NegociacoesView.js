var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Escapar } from "../decorators/Escape.js";
import { Utilitario } from "../Ultils/Utilitario.js";
import { View } from "./View.js";
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
                        ${(teste = model
            .listar()
            .map((negociacao) => {
            return `
                <tr>
                    <td>${this.formatar(negociacao.data)}</td>
                    <td>${negociacao.quantidade}</td>
                    <td>${negociacao.valor}</td>
                    <td>${Utilitario.obterDiaSemana(negociacao.data)}</td>
                </tr>
                `;
        })
            .join(""))}
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
__decorate([
    Escapar
], NegociacoesView.prototype, "template", null);
