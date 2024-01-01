import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  htmlApp = `
    <h1>Bem vindo, Dom!</h1>
    <p>Aplicação de página única (SPA)</p>
    <p>
      <a href="/posts/30/teste" data-link>Posts recentes</a>
    </p>
    <button id="btnMsg">Teste de Mensagem do Dashboard</button>`;

  async getHtml() {
    return this.htmlApp;
  }

  async getScript() {
    return '/static/js/script_dashboard.js';
  }
}
