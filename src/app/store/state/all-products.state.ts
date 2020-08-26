
import { IProduct } from '../../models/workspace.model';

export interface IAllProductsState {
  products: IProduct[];
}

export const initialAllProductsState: IAllProductsState = {
  products: [],
};