export class OrderItem {
  constructor(
    public id: string,
    public orderId: string,
    public menuItemId: string,
    public quantity: number,
  ) {}
}
