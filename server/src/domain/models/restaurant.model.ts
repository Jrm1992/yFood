export class Restaurant {
  constructor(
    public id: string, 
    public name: string, 
    public address: string, 
    public phone: string, 
    public description: string,
    public category: Category,
    ) {}
}

enum Category {
  BURGER = 'BURGER',
  PIZZA = 'PIZZA',
  SALAD = 'SALAD',
  DRINKS = 'DRINKS',
}