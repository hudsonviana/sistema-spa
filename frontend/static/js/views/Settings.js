import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>Gerencie suas configurações</p>
      <button id="btnMsg">Teste de Mensagem do Settings</button>`;
  }

  async getScript() {
    return '/static/js/script_settings.js';
  }
}
