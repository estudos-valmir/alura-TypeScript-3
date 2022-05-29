var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LogarTempoExecucao } from "../decorators/LogarTempoExecucao.js";
import { Inspecionar } from "../decorators/Inspect.js";
import { DiaDaSemana } from "../enums/DiaDaSemana.js";
import { Negociacao } from "../models/Negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";
import { MensagemView } from "../views/MensagemView.js";
import { NegociacoesView } from "../views/NegociacoesView.js";
import { DomInject } from "../decorators/domInject.js";
import { NegociacaoService } from "../services/NegociacoesService.js";
import { Utilitario } from "../Ultils/Utilitario.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagemView = new MensagemView("#mensagemView");
        this._negociacaoService = new NegociacaoService();
        this._utilitario = new Utilitario();
    }
    adicionar() {
        const negociacao = Negociacao.criarDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update("Apenas dias úteis são aceitos!", false);
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this.atualizarView();
        this.limparFormulario();
        this._utilitario.imprimir(negociacao, this._negociacoes);
    }
    importarDados() {
        this._negociacaoService
            .obterNegociaoDia()
            .then((negociacoesHoje) => {
            return negociacoesHoje.filter((negociacaoHoje) => {
                return !this._negociacoes
                    .listar()
                    .some((negociacao) => negociacao.ehIgual(negociacaoHoje));
            });
        })
            .then((negociacoesHoje) => {
            for (let negociacao of negociacoesHoje) {
                this._negociacoes.adicionar(negociacao);
            }
            this._negociacoesView.update(this._negociacoes);
        });
    }
    limparFormulario() {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";
        this._inputData.focus();
    }
    atualizarView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociacao Adicionada com sucesso!");
    }
    diaUtil(date) {
        return (date.getDay() != DiaDaSemana.DOMINGO &&
            date.getDay() != DiaDaSemana.SABADO);
    }
}
__decorate([
    DomInject("#data")
], NegociacaoController.prototype, "_inputData", void 0);
__decorate([
    DomInject("#quantidade")
], NegociacaoController.prototype, "_inputQuantidade", void 0);
__decorate([
    DomInject("#valor")
], NegociacaoController.prototype, "_inputValor", void 0);
__decorate([
    Inspecionar,
    LogarTempoExecucao()
], NegociacaoController.prototype, "adicionar", null);
