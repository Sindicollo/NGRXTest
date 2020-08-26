import { IAllProductsState, initialAllProductsState } from './all-products.state';
import { ISelectedDemoState, initialSelectedDemoState } from './selected-demo.state';

export interface IWorkspaceState {
  allProducts: IAllProductsState;
  selectedDemo: ISelectedDemoState;
}

export const initialWorkspaceState: IWorkspaceState = {
  allProducts: initialAllProductsState,
  selectedDemo: initialSelectedDemoState,
};

export function getInitialState(): IWorkspaceState {
  return initialWorkspaceState;
}
