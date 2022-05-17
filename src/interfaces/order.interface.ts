interface IOrder {
  id: number;
  userId: number;
  productsIds: Array<number>;
}

export default IOrder;