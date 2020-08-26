import { ActionReducerMap } from '@ngrx/store';
import { IWorkspaceState } from '../state/workspace.state';
import { allProductsReducers } from './all-products.reducers';
import { selectedDemoReducers } from './selected-demo.reducers';

export const workspaceReducers: ActionReducerMap<IWorkspaceState, any> = {
  allProducts: allProductsReducers,
  selectedDemo: selectedDemoReducers
};
