import { createSelector } from '@ngrx/store';

import { IWorkspaceState } from '../state/workspace.state';
import { IAllProductsState } from '../state/all-products.state';

const selectAllProducts = (state: IWorkspaceState) => state.allProducts;

export const selectProducts = createSelector(
  selectAllProducts,
  (state: IAllProductsState) => state.products
);
