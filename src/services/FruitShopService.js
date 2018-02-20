import { configService } from './ConfigService';
import { networkService } from './NetworkService';

import { Products } from '../constants/mock/Products';

class FruitShopService {
  getProducts = () => {
    if (
      process.env.REACT_APP_FAKE_BACKEND === 'true' &&
      process.env.NODE_ENV === 'developent'
    ) {
      return new Promise((resolve) =>
        setTimeout(() => resolve(Products), 2000)
      );
    } else {
      return networkService
        .get(`${configService.getApiServer()}/api/products`);
    }
  }
}

export const fruitShopService = new FruitShopService();
