import ProductModel from '../models/ProductModel';
import IProduct from '../interfaces/product.interface';

export default class ProductService {
  public model = new ProductModel();

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public getOne = async (id: number): Promise<IProduct> => {
    const product = await this.model.getOne(id);
    return product;
  };

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const newProduct = await this.model.create({ name, amount });
    return newProduct;
  };
}