import { createSelector } from '@ngrx/store';

import { IWorkspaceState } from '../state/workspace.state';
import { ISelectedDemoState } from '../state/selected-demo.state';

const selectSelectedDemo = (state: IWorkspaceState) => state.selectedDemo;

export const selectDemo = createSelector(
  selectSelectedDemo,
  (state: ISelectedDemoState) => state.demo
);
