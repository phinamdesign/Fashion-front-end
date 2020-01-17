import {Size} from './size';
import {Color} from './color';
import {Product} from './product';

export interface ProductDetail {
  id?: number;
  size?: Size;
  color?: Color;
  product?: Product;
}
