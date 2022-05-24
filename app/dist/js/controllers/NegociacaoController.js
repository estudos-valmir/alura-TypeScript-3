import { DiaDaSemana } from '../enums/DiaDaSemana.js';
import { Negociacao } from '../models/Negociacao.js';
import { Negociacoes } from '../models/Negociacoes.js';
import { MensagemView } from '../views/MensagemView.js';
import { NegociacoesView } from '../views/NegociacoesView.js';
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView', true);
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = Negociacao.criarDe(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this._mensagemView.update('Apenas dias úteis são aceitos!', false);
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this.atualizarView();
        this.limparFormulario();
    }
    limparFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }
    atualizarView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociacao Adicionada com sucesso!');
    }
    diaUtil(date) {
        return date.getDay() != DiaDaSemana.DOMINGO && date.getDay() != DiaDaSemana.SABADO;
    }
}
