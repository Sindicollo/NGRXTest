import { ESelectedDemoActions, SelectedDemoActions } from '../actions/selected-demo.actions';
import { ISelectedDemoState, initialSelectedDemoState} from '../state/selected-demo.state';

export const selectedDemoReducers = (
  state = initialSelectedDemoState,
  action: SelectedDemoActions
): ISelectedDemoState => {
  switch (action.type) {

    case ESelectedDemoActions.SetDemo: {
      return {
        ...state,
        demo: action.payload
      };
    }

    default:
      return state;
  }
};