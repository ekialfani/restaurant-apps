import CONFIG from '../../globals/config';
import { foodDB, drinkDB } from '../../data/menu-db';

const createRestaurantDetailsTemplate = (restaurant) => {
  const {
    name, city, address, rating, pictureId, description,
  } = restaurant;

  return (`
    <img class="poster" src="${CONFIG.BASE_IMAGE_URL + pictureId}" alt="${name}">
    <article class="detail-inner">
      <h2 class="title" id="main-content" tabindex="0">${name}</h2>
      <div class="info">
        <div class="rating">
          <span>${rating}</span>
          <i class="fas fa-star"></i>
        </div>
        <div class="address">
          <i class="fas fa-location-dot"></i>
          <span>${address}, ${city}</span>
        </div>
      </div>
      <div class="description">
        <strong>Description:</strong>
        <span>${description}</span>
      </div>
    </article>
  `);
};

const createLikeButtonTemplate = () => (`
  <button aria-label="like this restaurant" id="like-button" class="like">
    <i class="far fa-heart"></i>
  </button>
`);

const createLikedButtonTemplate = () => (`
  <button aria-label="unlike this restaurant" id="like-button" class="like">
    <i class="fas fa-heart"></i>
  </button>
`);

const createDrawerShowButtonTemplate = () => (`
  <button id="hamburger-button" aria-label="show navigation list menu">
    <i class="fas fa-bars"></i>
  </button>
`);

const createDrawerHideButtonTemplate = () => (`
  <button id="hamburger-button" aria-label="hide navigation list menu">
    <i class="fas fa-xmark"></i>
  </button>
`);

const createRestaurantMenuTemplate = (menus) => {
  const { foods, drinks } = menus;

  return (`
    <div class="menus">
      <div class="menu-item">
        <h3 class="outlet-label">foods</h3>
        <div class="foods">
          ${foods.map((food , index) => {
            const { img_url, price } = foodDB[`${food.name}`];

            if(index > 3) {
              return;
            }

            return (
              `<div class="food-item">
                <img src="${img_url}" alt="${food.name}" />
                <div class="food-content">
                  <h4 class="food-title">${food.name}</h4>
                  <p class="price">Rp. ${price}</p>
                </div>
                </div>
            `);
          }).join('')}
        </div>
      </div>
      <div class="menu-item">
        <h3 class="outlet-label">drinks</h3>
        <div class="drinks">
          ${drinks.map((drink, index) => {
            const { img_url, price } = drinkDB[`${drink.name}`];

            if(index > 3) {
              return;
            }

            return (`
              <div class="drink-item">
                <img src="${img_url}" alt="${drink.name}" />
                <div class="drink-content">
                  <h4 class="drink-title">${drink.name}</h4>
                  <p class="price">Rp. ${price}</p>
                </div>
              </div>
            `);
          }).join('')}
        </div>
      </div>
    </div>
  `);
};

const createCustomerReviewTemplate = (customerReview) => {
  const { name, date, review } = customerReview;

  return (`
    <div class="customer-review">
      <h4 class="name">${name}</h4>
      <p class="date">${date}</p>
      <p class="review">${review}</p>
    </div>
  `);
};

const createAddNewReviewTemplate = () => (`
  <div class="add-new-review">
    <div class="review-content">
      <h4 class="review-label">leave a review</h4>
      <p class="review-description">How was your experience?</p>
    </div>
    <button id="add-review-button" class="add-review-button">give review</button>
    <div class="review-form-container">
      <form id="review-form" class="review-form form-hide">
        <h4 class="form-title">How was your experience?</h4>
        <div class="form-group">
          <label for="customer-name">name</label>
          <input name="customer-name" id="customer-name" type="text" placeholder="input your name" autocomplete="off"/>
        </div>
        <div class="form-group">
          <label for="customer-review">review</label>
          <textarea id="customer-review" name="customer-review" aria-label="input your review" placeholder="input your review"></textarea>
        </div>
        <button type="submit" id="submit-button" class="submit-button">post review</button>
        <button id="close-button" class="close-button" aria-label="close the review form">
          <i class="fas fa-circle-xmark"></i>
        </button>
      </form>
    </div>
  </div>
`);

export {
  createRestaurantDetailsTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createDrawerShowButtonTemplate,
  createDrawerHideButtonTemplate,
  createRestaurantMenuTemplate,
  createAddNewReviewTemplate,
  createCustomerReviewTemplate,
};
