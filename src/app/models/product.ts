import {Category} from './category';
import {Supplier} from './supplier';

export class Product {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
  quantity: number;
  category: Category;
  supplier: Supplier;
}
