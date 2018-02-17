import { configService } from './ConfigService';
import { networkService } from './NetworkService';

class FruitShopService {
  getProducts = () => {
    return networkService
      .get(`${configService.getApiServer()}/products`);
  }
}

export const fruitShopService = new FruitShopService();
