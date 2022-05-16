import { ResultSetHeader } from 'mysql2/promise';
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

  public create = async (product: IProduct): Promise<IProduct> => {
    const { name, amount } = product;
    const result = await conn.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: result[0].insertId, name, amount };
  };
}