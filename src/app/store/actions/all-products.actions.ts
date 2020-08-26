import { Action } from '@ngrx/store';
import { IProduct } from '../../models/workspace.model';

export enum EAllProductsActions {
  SetAllProducts = '[All Products] Set Products',
}

export interface SetAllProductsPayload {
  products: IProduct[];
}

export class SetAllProducts implements Action {
  public readonly type = EAllProductsActions.SetAllProducts;
  constructor(public payload: SetAllProductsPayload) {}
}

export type AllProductsActions = SetAllProducts;
