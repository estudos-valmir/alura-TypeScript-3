import { NegociacaoController } from './controllers/NegociacaoController.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw Error('Form não existe!');
}
