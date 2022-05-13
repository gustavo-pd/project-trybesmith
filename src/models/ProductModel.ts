import conn from './connection';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public getAll = async (): Promise<IProduct[]> => {
    const [products] = await conn.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return products as IProduct[];
  };

  public getOne = async (id: number): Promise<IProduct> => {
    const result = await conn.execute('SELECT * FROM Trybesmith.Products WHERE id = ?', [id]);
    const [rows] = result;
    const [product] = rows as IProduct[];
    return product;
  };
}