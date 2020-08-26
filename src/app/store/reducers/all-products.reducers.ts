import { EAllProductsActions, AllProductsActions } from '../actions/all-products.actions';
import { initialAllProductsState, IAllProductsState } from '../state/all-products.state';

export const allProductsReducers = (
  state = initialAllProductsState,
  action: AllProductsActions
): IAllProductsState => {
  switch (action.type) {

    case EAllProductsActions.SetAllProducts: {
      return {
        ...state,
        products: action.payload.products
      };
    }

    default:
      return state;
  }
};
