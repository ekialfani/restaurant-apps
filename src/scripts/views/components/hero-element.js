import '../../../styles/hero.css';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = (`
      <img class="hero-image" src="./images/hero/hero-image.jpg" alt="best restaurant">
      <div class="hero-inner">
        <h2 class="hero-title">explore your <span>best restaurant</span></h2>
        <p class="hero-tagline">Here you can explore a wide range of five-star quality restaurants at street prices. so you can enjoy your favorite food without fear of running out of funds.</p>
      </div>
    `);
  }
}

customElements.define('hero-element', HeroElement);
