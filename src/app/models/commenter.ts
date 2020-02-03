import {Product} from './product';
import {User} from './User';

export interface Commenter {
  id?: string;
  content?: string;
  date?: string;
  edit?: string;
  product?: Product;
  user?: User;
  productId?: string;
}
