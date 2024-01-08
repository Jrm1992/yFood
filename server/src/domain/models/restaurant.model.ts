import { MenuItem } from "./menu-item.model";
import { Order } from "./order.model";

export class Restaurant {
  constructor(
    public id: string, 
    public name: string, 
    public address: string, 
    public phone: string, 
    public description: string,
    public category: string,
    public menuItems: MenuItem[],
    public orders: Order[]
    ) {}
}