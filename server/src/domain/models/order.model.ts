export class Order {
  constructor(
    public id: string,
    public restaurantId: string,
    public orderDate: Date,
    public total: number,
    public status: string
  ) {}
}