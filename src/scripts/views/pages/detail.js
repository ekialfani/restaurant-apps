import UrlParser from '../../routes/url-parser';
import RestaurantDBSource from '../../data/restaurant-db-source';
import { createRestaurantDetailsTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import OutletDetailInitiator from '../../utils/outlet-detail-initiator';
import '../components/loading-indicator';
import '../components/error-message';

const Detail = {
  async render() {
    return (`
      <section id="detail"></section>
      <div id="like-button-container"></div>
      <div class="outlet-detail">
        <div class="outlet-button">
          <button id="menu-button" class="active-button">menu</button>
          <button id="review-button">review</button>  
        </div>
        <div id="outlet-content"></div>
      </div>
    `);
  },

  async afterRender() {
    const detailContainer = document.querySelector('#detail');
    const loadingIndicator = document.createElement('loading-indicator');

    detailContainer.innerHTML = '';
    detailContainer.append(loadingIndicator);

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDBSource.getDetail(url.id);

      detailContainer.innerHTML = createRestaurantDetailsTemplate(restaurant);

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#like-button-container'),
        restaurant,
      });

      OutletDetailInitiator.init({
        outletContainer: document.querySelector('#outlet-content'),
        menuButton: document.querySelector('#menu-button'),
        reviewButton: document.querySelector('#review-button'),
        restaurant,
      });
    } catch (message) {
      const errorMessage = document.createElement('error-message');
      errorMessage.message = message;

      detailContainer.innerHTML = '';
      detailContainer.append(errorMessage);
    }
  },
};

export default Detail;
