import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  htmlApp = `
    <h1>Posts</h1>
    <p>Você está vendo os posts.</p>
    <button id="btnMsg">Teste de Mensagem do Posts</button>`;

  async getHtml() {
    return this.htmlApp;
  }

  async getScript() {
    return '/static/js/script_posts.js';
  }
}
