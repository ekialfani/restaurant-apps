/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-promise-reject-errors */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },

  async getAllRestaurant() {
    const restaurants = (await dbPromise).getAll(OBJECT_STORE_NAME);

    if (await this._restaurantDataIsEmpty(restaurants)) {
      return Promise.reject('You haven\'t added your favorite restaurant yet.');
    }

    return restaurants;
  },

  async addRestaurant(restaurant) {
    return (await dbPromise).add(OBJECT_STORE_NAME, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },

  async _restaurantDataIsEmpty(restaurants) {
    return !(await restaurants).length;
  },
};

export default FavoriteRestaurantIdb;
