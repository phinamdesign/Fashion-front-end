import {Product} from './product';
import {Size} from './size';
import {Color} from './color';

export interface ProductDetail {
  id?: number;
  size?: Size;
  color?: Color;
  product?: Product;
  quantity?: number;
  order?: any;
  salePrice?: number;
}
