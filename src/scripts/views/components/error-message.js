/* eslint-disable no-underscore-dangle */
import '../../../styles/error-message.css';

class ErrorMessage extends HTMLElement {
  /**
   * @param {any} message
   */
  set message(message) {
    this._message = message;
    this.render();
  }

  render() {
    this.innerHTML = (`
      <div class="error-message">
        <img src="./images/error/page-not-found.jpg" alt="error page not found"/>
        <h3 class="message">${this._message}</h3>
        <a href="index.html" class="homepage-link" rel="noreferrer">go home</a>
      </div>
    `);
  }
}

customElements.define('error-message', ErrorMessage);
