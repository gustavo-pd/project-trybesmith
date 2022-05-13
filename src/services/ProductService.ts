import UserModel from '../models/ProductModel';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public model = new UserModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };
}