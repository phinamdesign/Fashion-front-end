import {Category} from './category';
import {Supplier} from './supplier';
import {Picture} from './Picture';
import {ProductDetail} from "./productDetail";

export class Product {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  quantity?: number;
  category?: any;
  supplier?: Supplier;
  pictures?: any[];
  productDetails?: ProductDetail[];
}
