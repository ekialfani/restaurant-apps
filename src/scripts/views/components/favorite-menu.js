import '../../../styles/favorite-menu.css';

class FavoriteMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = (`
      <h3 class="content-label favorite-label">favorite menu</h3>
      <section class="favorite-list" aria-label="favorite menu">
        <div class="favorite-item">
          <img src="./images/foods/hamburger.jpg" alt="hamburger image">
          <h4 class="favorite-title">hamburger</h4>
        </div>
        <div class="favorite-item">
          <img src="./images/foods/pizza.jpg" alt="pizza image">
          <h4 class="favorite-title">pizza</h4>
        </div>
        <div class="favorite-item">
          <img src="./images/foods/fruit-juice.jpg" alt="fruit juice image">
          <h4 class="favorite-title">fruit juice</h4>
        </div>
      </section>
    `);
  }
}

customElements.define('favorite-menu', FavoriteMenu);
