import AbstractView from './AbstractView.js';

const htmlApp = `
  <h1>Bem vindo, Dom!</h1>
  <p>Aplicação de página única (SPA)</p>
  <p>
  <a href="/posts/30/teste" data-link>Posts recentes</a>
  </p>
`;

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return htmlApp;
  }

  async getScript() {
    return '/static/js/script_dashboard.js';
  }
}
