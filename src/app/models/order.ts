import {User} from './User';
import {ProductDetail} from './productDetail';

export interface Order {
  id: number;
  user?: User;
  productDetail?: ProductDetail[];
  phone?: string;
  deliveryAddress?: string;
  total?: number;
  date?: Date;
  status?: string;
}
