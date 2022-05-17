import conn from './connection';
import IOrder from '../interfaces/order.interface';

export default class OrderModel {
  public getAll = async (): Promise<IOrder[]> => {
    const [allOrders] = await conn.execute(
      'SELECT O.id as id, O.userId as userId FROM Trybesmith.Orders as O;',
    );
    const [allProducts] = await conn.execute(
      'SELECT orderId, id as prodId FROM Trybesmith.Products;',
    );

    const sequelizeOrder: Array<IOrder> = Object
      .values(allOrders).map((order) => ({ id: order.id, userId: order.userId, productsIds: [] }));

    Object.values(allProducts).forEach((p) => {
      Object.values(allOrders).forEach((o, i) => {
        if (o.id === p.orderId) {
          sequelizeOrder[i].productsIds.push(p.prodId);
        }
      });
    });
    return sequelizeOrder as IOrder[];
  };
} 
