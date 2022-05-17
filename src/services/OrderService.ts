import OrderModel from '../models/OrderModel';
import IOrder from '../interfaces/order.interface';

export default class UserService {
  public model = new OrderModel();

  public getAllOrders = async (): Promise<IOrder[]> => {
    const order = await this.model.getAll();
    return order;
  };
}