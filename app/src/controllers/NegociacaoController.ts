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
    @DomInject("#data")
    private _inputData: HTMLInputElement;
    @DomInject("#quantidade")
    private _inputQuantidade: HTMLInputElement;
    @DomInject("#valor")
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");
    private _negociacaoService = new NegociacaoService();
    private _utilitario = new Utilitario();

    constructor() {}

    @Inspecionar
    @LogarTempoExecucao()
    public adicionar(): void {
        const negociacao = Negociacao.criarDe(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update("Apenas dias úteis são aceitos!", false);
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this.atualizarView();
        this.limparFormulario();
        this._utilitario.imprimir(negociacao, this._negociacoes);
    }

    public importarDados(): void {
        this._negociacaoService
            .obterNegociaoDia()
            .then((negociacoesHoje) => {
                return negociacoesHoje.filter((negociacaoHoje) => {
                    return !this._negociacoes
                        .listar()
                        .some((negociacao) =>
                            negociacao.ehIgual(negociacaoHoje)
                        );
                });
            })
            .then((negociacoesHoje) => {
                for (let negociacao of negociacoesHoje) {
                    this._negociacoes.adicionar(negociacao);
                }

                this._negociacoesView.update(this._negociacoes);
            });
    }

    private limparFormulario(): void {
        this._inputData.value = "";
        this._inputQuantidade.value = "";
        this._inputValor.value = "";

        this._inputData.focus();
    }

    private atualizarView(): void {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociacao Adicionada com sucesso!");
    }

    private diaUtil(date: Date): boolean {
        return (
            date.getDay() != DiaDaSemana.DOMINGO &&
            date.getDay() != DiaDaSemana.SABADO
        );
    }
}
