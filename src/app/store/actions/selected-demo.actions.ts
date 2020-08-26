import { Action } from '@ngrx/store';

export enum ESelectedDemoActions {
  SetDemo = '[Demo] Set selected demo',
}

export class SetSelectedDemo implements Action {
  public readonly type = ESelectedDemoActions.SetDemo;
  constructor(public payload: string) {}
}

export type SelectedDemoActions = SetSelectedDemo;